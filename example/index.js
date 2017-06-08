/**
 *
 */

var jose = require("node-jose");

var store = jose.JWK.createKeyStore();

// load keys
var keys = {
      "encrypt": {
        "kty": "oct",
        "kid": "f-WbjxBC3dPuI3d24kP2hfvos7Qz688UTi6aB0hN998",
        "use": "enc",
        "alg": "A128GCM",
        "k": "4uFxxV7fhNmrtiah2d1fFg"
      },
      "sign": {
        "kty": "EC",
        "kid": "P5UpOv0eMq1wcxLf7WxIg09JdSYGYFDOWkldueaImf0",
        "use": "sig",
        "crv": "P-256",
        "x": "be807S4O7dzB6I4hTiCUvmxCI6FuxWba1xYBlLSSsZ8",
        "y": "rOGC4vI69g-WF9AGEVI37sNNwbjIzBxSjLvIL7f3RBA",
        "d": "yaowezrCLTU6yIwUL5RQw67cHgvZeMTLVZXjUGb1A1M"
      }
    };

function loadKey(kname) {
  var p;
  p = store.add(keys[kname]);
  p = p.then((k) => {
    keys[kname] = k;
    return k;
  });
  return p;
}

var samples = {
  "simple": {
    "sub": "uri:http://cdni.example/foo/bar/baz"
  },
  "complex": {
    "aud": "[2001:db8::1/32]",
    "cdniv": 1,
    "exp": 1474243500,
    "iat": 1474243200,
    "iss": "uCDN Inc",
    "jti": "5DAafLhZAfhsbe",
    "nbf": 1474243200,
    "sub": "uri-regex:http://cdni\\.example/foo/bar/baz/[0-9]{3}\\.png"
  },
  "chained-1": {
    "cdniets": 30,
    "cdnistt": 1,
    "exp": 1474243500,
    "sub": "uri-regex:http://cdni\\.example/foo/bar/baz/[0-9]{3}\\.ts"
  },
  "chained-2": {
    "cdniets": 30,
    "cdnistt": 1,
    "exp": 1474243530,
    "sub": "uri-regex:http://cdni\\.example/foo/bar/baz/[0-9]{3}\\.ts"
  }
};

function generateSample(sname) {
  var p;
  p = Promise.resolve(samples[sname]);
  p = p.then((claims) => {
    console.log("\n-----START EXAMPLE '%s'-----", sname);
    return claims;
  });

  // OPTIONAL -- exchange 'aud' claim for encrypted
  p = p.then((claims) => {
    if (!claims.aud) {
      return claims;
    }

    console.log("'aud' DECRYPTED:  %s", claims.aud);
    return jose.JWE.createEncrypt({format: "compact"}, keys["encrypt"]).
           final(claims.aud, "utf8").
           then((result) => {
             console.log("'aud' ENCRYPTED:  %s", result);
             claims.aud = result;
             return claims;
           });
  })

  // Output decoded claims
  p = p.then((claims) => {
    var output;
    output = JSON.stringify(claims, null, "  ");
    console.log("\nclaims DECODED:\n%s", output);
    return claims;
  });
  p = p.then((claims) => {
    claims = JSON.stringify(claims);
    return jose.JWS.createSign({format: "compact"}, keys["sign"]).
           final(claims, "utf8");
  });
  p = p.then((signed) => {
    console.log("\nclaims SIGNED:\n%s", signed);
    console.log("-----END EXAMPLE '%s'-----\n", sname);
  })
  return p;
}

var p;
// load the keys
p = Promise.all(Object.keys(keys).map(loadKey));
p.then(() => {
  Object.keys(samples).reduce((p, sname) => {
    return p.then(() => {
      return generateSample(sname);
    });
  }, Promise.resolve());
});
