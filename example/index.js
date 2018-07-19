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
    "exp": 1474243500,
    "iss": "uCDN Inc",
    "cdniuc": "hash:sha-256;2tderfWPa86Ku7YnzW51YUp7dGUjBS/3SW3ELx4hmWY"
  },
  "complex": {
    "aud": "dCDN LLC",
    "sub": "UserToken",
    "cdniip": "[2001:db8::1/32]",
    "cdniv": 1,
    "exp": 1474243500,
    "iat": 1474243200,
    "iss": "uCDN Inc",
    "jti": "5DAafLhZAfhsbe",
    "nbf": 1474243200,
    "cdniuc": "regex:http://cdni\\.example/foo/bar/[0-9]{3}\\.png"
  },
  "chained-1": {
    "cdniets": 30,
    "cdnistt": 1,
    "exp": 1474243500,
    "cdniuc": "regex:http://cdni\\.example/foo/bar/[0-9]{3}\\.ts"
  },
  "chained-2": {
    "cdniets": 30,
    "cdnistt": 1,
    "exp": 1474243530,
    "cdniuc": "regex:http://cdni\\.example/foo/bar/[0-9]{3}\\.ts"
  }
};

function generateSample(sname) {
  var p;
  p = Promise.resolve(samples[sname]);
  p = p.then((claims) => {
    console.log("\n-----START EXAMPLE '%s'-----", sname);
    return claims;
  });

  // OPTIONAL -- exchange 'cdniip' claim for encrypted
  p = p.then((claims) => {
    if (!claims.cdniip) {
      return claims;
    }

    console.log("'cdniip' DECRYPTED:  %s", claims.cdniip);
    return jose.JWE.createEncrypt({format: "compact"}, keys["encrypt"]).
           final(claims.cdniip, "utf8").
           then((result) => {
             console.log("'cdniip' ENCRYPTED:  %s", result);
             claims.cdniip = result;
             return claims;
           });
  })

  // OPTIONAL -- exchange 'sub' claim for encrypted
  p = p.then((claims) => {
    if (!claims.sub) {
      return claims;
    }

    console.log("'sub' DECRYPTED:  %s", claims.sub);
    return jose.JWE.createEncrypt({format: "compact"}, keys["encrypt"]).
           final(claims.sub, "utf8").
           then((result) => {
             console.log("'sub' ENCRYPTED:  %s", result);
             claims.sub = result;
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
