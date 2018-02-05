package main

import (
	"fmt"

	"github.com/lestrrat/go-jwx/jwk"
	"github.com/lestrrat/go-jwx/jws"
	"github.com/lestrrat/go-jwx/jwt"
	"github.com/lestrrat/go-jwx/jwe"
)

func main() {
	s, _ := jwk.ParseString(`{ "keys":[
{
     "alg":"ES256",
     "kty": "EC",
     "kid": "P5UpOv0eMq1wcxLf7WxIg09JdSYGYFDOWkldueaImf0",
     "use": "sig",
     "crv": "P-256",
     "x": "be807S4O7dzB6I4hTiCUvmxCI6FuxWba1xYBlLSSsZ8",
     "y": "rOGC4vI69g-WF9AGEVI37sNNwbjIzBxSjLvIL7f3RBA"
   },
{
     "alg":"ES256",
     "kty": "EC",
     "kid": "P5UpOv0eMq1wcxLf7WxIg09JdSYGYFDOWkldueaImf0",
     "use": "sig",
     "crv": "P-256",
     "x": "be807S4O7dzB6I4hTiCUvmxCI6FuxWba1xYBlLSSsZ8",
     "y": "rOGC4vI69g-WF9AGEVI37sNNwbjIzBxSjLvIL7f3RBA",
     "d": "yaowezrCLTU6yIwUL5RQw67cHgvZeMTLVZXjUGb1A1M"
   },
{
     "kty": "oct",
     "kid": "f-WbjxBC3dPuI3d24kP2hfvos7Qz688UTi6aB0hN998",
     "use": "enc",
     "alg": "A128GCM",
     "k": "4uFxxV7fhNmrtiah2d1fFg"
   }
]}`)
	fmt.Printf("%+#v\n", s)

	b, _ := jws.VerifyWithJWKSet([]byte("eyJhbGciOiJFUzI1NiIsImtpZCI6IlA1VXBPdjBlTXExd2N4TGY3V3hJZzA5SmRTWUdZRkRPV2tsZHVlYUltZjAifQ.eyJzdWIiOiJ1cmk6aHR0cDovL2NkbmkuZXhhbXBsZS9mb28vYmFyL2JheiJ9.LTizGd7zCb17Qp_80ClGApLCieRIq3dCjcRckNfLqiJ4BTGSfVXoDtm0Z6L5Jx4EmwM1w-WkznNajUy11iMAcA"), s, nil)
	fmt.Printf("%s\n", b)

	b, _ = jws.VerifyWithJWKSet([]byte("eyJhbGciOiJFUzI1NiIsImtpZCI6IlA1VXBPdjBlTXExd2N4TGY3V3hJZzA5SmRTWUdZRkRPV2tsZHVlYUltZjAifQ.eyJhdWQiOiJleUpoYkdjaU9pSmthWElpTENKcmFXUWlPaUptTFZkaWFuaENRek5rVUhWSk0yUXlOR3RRTW1obWRtOXpOMUY2TmpnNFZWUnBObUZDTUdoT09UazRJaXdpWlc1aklqb2lRVEV5T0VkRFRTSjkuLm9HTHNuRjhmTGxGY1VYSzAuS0ZmQkJIX0ZQWUZ1LVJCRkJSM3JoUS42X01WYWE0dDdKaVZYMklnVWtaM2pBIiwiY2RuaXYiOjEsImV4cCI6MTQ3NDI0MzUwMCwiaWF0IjoxNDc0MjQzMjAwLCJpc3MiOiJ1Q0ROIEluYyIsImp0aSI6IjVEQWFmTGhaQWZoc2JlIiwibmJmIjoxNDc0MjQzMjAwLCJzdWIiOiJ1cmktcmVnZXg6aHR0cDovL2NkbmlcXC5leGFtcGxlL2Zvby9iYXIvYmF6L1swLTldezN9XFwucG5nIn0.r2FiSdfnGRw_RC2roGwh4LEYlfsWGF972-Mf3He_LhGr2_3eRXP0jP_OFPj5NEtTZFY4PX_iD7vPD12_HPDJCQ"), s, nil)
	fmt.Printf("%s\n", b)

	c := jwt.NewClaimSet()
	c.UnmarshalJSON(b)
	        fmt.Printf("%+#v\n", c.EssentialClaims)
	        fmt.Printf("%+#v\n", c.Get("aud"))
	_, err := jwe.DecryptWithJWKSet([]byte("eyJhbGciOiJkaXIiLCJraWQiOiJmLVdianhCQzNkUHVJM2QyNGtQMmhmdm9zN1F6Njg4VVRpNmFCMGhOOTk4IiwiZW5jIjoiQTEyOEdDTSJ9..oGLsnF8fLlFcUXK0.KFfBBH_FPYFu-RBFBR3rhQ.6_MVaa4t7JiVX2IgUkZ3jA"), s, nil)

	fmt.Printf("%+#v\n", err)
}
