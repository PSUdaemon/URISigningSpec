# URI Signing Examples #

This sub-project generates the examples for `draft-ietf-cdni-uri-signing`.

## Prerequisites ##

* [NodeJS](https://nodejs.org) (>= 4.5.0)

## Installing and Running ##

To install the example generator:

```
git clone git@github.com:linuxwolf/URISigningSpec#jwt-ex
cd URISigningSpec/exampl
npm install
```

To generate the examples:

```
node .
```

## Example Output ##

```
-----START EXAMPLE 'simple'-----

claims DECODED:
{
  "exp": 1641079223,
  "iss": "uCDN Inc",
  "cdniuc": "hash:sha-256;2tderfWPa86Ku7YnzW51YUp7dGUjBS_3SW3ELx4hmWY"
}

claims SIGNED:
eyJhbGciOiJFUzI1NiIsImtpZCI6IlA1VXBPdjBlTXExd2N4TGY3V3hJZzA5SmRTWUdZRkRPV2tsZHVlYUltZjAifQ.eyJleHAiOjE2NDEwNzkyMjMsImlzcyI6InVDRE4gSW5jIiwiY2RuaXVjIjoiaGFzaDpzaGEtMjU2OzJ0ZGVyZldQYTg2S3U3WW56VzUxWVVwN2RHVWpCU18zU1czRUx4NGhtV1kifQ.P5It6q0kxNx5NBA76D-bYKIxlourey5JpU4diFLGHaVTk21QkEskjxoeneDoBj_1C5Ty1smBOovQMrGzuPmEHA
-----END EXAMPLE 'simple'-----


-----START EXAMPLE 'complex'-----
'cdniip' DECRYPTED:  [2001:db8::1/32]
'cdniip' ENCRYPTED:  eyJlbmMiOiJBMTI4R0NNIiwiYWxnIjoiZGlyIiwia2lkIjoiZi1XYmp4QkMzZFB1STNkMjRrUDJoZnZvczdRejY4OFVUaTZhQjBoTjk5OCJ9..s614z__atK4Cijic.ieSm7o2o7rIqCYbDExdoyQ.JUnPLQzBf2dPhBPRTxHKww
'sub' DECRYPTED:  UserToken
'sub' ENCRYPTED:  eyJlbmMiOiJBMTI4R0NNIiwiYWxnIjoiZGlyIiwia2lkIjoiZi1XYmp4QkMzZFB1STNkMjRrUDJoZnZvczdRejY4OFVUaTZhQjBoTjk5OCJ9..MbT8tWet01VVHjuS.4KP7AJefU70b.Rc_o3tCfWoPkIdySsYtfMw

claims DECODED:
{
  "aud": "dCDN LLC",
  "sub": "eyJlbmMiOiJBMTI4R0NNIiwiYWxnIjoiZGlyIiwia2lkIjoiZi1XYmp4QkMzZFB1STNkMjRrUDJoZnZvczdRejY4OFVUaTZhQjBoTjk5OCJ9..MbT8tWet01VVHjuS.4KP7AJefU70b.Rc_o3tCfWoPkIdySsYtfMw",
  "cdniip": "eyJlbmMiOiJBMTI4R0NNIiwiYWxnIjoiZGlyIiwia2lkIjoiZi1XYmp4QkMzZFB1STNkMjRrUDJoZnZvczdRejY4OFVUaTZhQjBoTjk5OCJ9..s614z__atK4Cijic.ieSm7o2o7rIqCYbDExdoyQ.JUnPLQzBf2dPhBPRTxHKww",
  "cdniv": 1,
  "exp": 1641079223,
  "iat": 1640906423,
  "iss": "uCDN Inc",
  "jti": "5DAafLhZAfhsbe",
  "nbf": 1640992823,
  "cdniuc": "regex:http://cdni\\.example/foo/bar/[0-9]{3}\\.png"
}

claims SIGNED:
eyJhbGciOiJFUzI1NiIsImtpZCI6IlA1VXBPdjBlTXExd2N4TGY3V3hJZzA5SmRTWUdZRkRPV2tsZHVlYUltZjAifQ.eyJhdWQiOiJkQ0ROIExMQyIsInN1YiI6ImV5SmxibU1pT2lKQk1USTRSME5OSWl3aVlXeG5Jam9pWkdseUlpd2lhMmxrSWpvaVppMVhZbXA0UWtNelpGQjFTVE5rTWpSclVESm9ablp2Y3pkUmVqWTRPRlZVYVRaaFFqQm9Uams1T0NKOS4uTWJUOHRXZXQwMVZWSGp1Uy40S1A3QUplZlU3MGIuUmNfbzN0Q2ZXb1BrSWR5U3NZdGZNdyIsImNkbmlpcCI6ImV5SmxibU1pT2lKQk1USTRSME5OSWl3aVlXeG5Jam9pWkdseUlpd2lhMmxrSWpvaVppMVhZbXA0UWtNelpGQjFTVE5rTWpSclVESm9ablp2Y3pkUmVqWTRPRlZVYVRaaFFqQm9Uams1T0NKOS4uczYxNHpfX2F0SzRDaWppYy5pZVNtN28ybzdySXFDWWJERXhkb3lRLkpVblBMUXpCZjJkUGhCUFJUeEhLd3ciLCJjZG5pdiI6MSwiZXhwIjoxNjQxMDc5MjIzLCJpYXQiOjE2NDA5MDY0MjMsImlzcyI6InVDRE4gSW5jIiwianRpIjoiNURBYWZMaFpBZmhzYmUiLCJuYmYiOjE2NDA5OTI4MjMsImNkbml1YyI6InJlZ2V4Omh0dHA6Ly9jZG5pXFwuZXhhbXBsZS9mb28vYmFyL1swLTldezN9XFwucG5nIn0.MgV1AIvlWf3rjUqWGKlpR1CcCpF8N5FX7xlZ0wGCqfJY3KpqTrVNKaEWVXGoo12oVgQ7J2KoRtcr2ah9dsjqOA
-----END EXAMPLE 'complex'-----


-----START EXAMPLE 'chained-1'-----

claims DECODED:
{
  "cdniets": 30,
  "cdnistt": 1,
  "cdnistd": 2,
  "exp": 1641079223,
  "cdniuc": "regex:http://cdni\\.example/foo/bar/[0-9]{3}\\.ts"
}

claims SIGNED:
eyJhbGciOiJFUzI1NiIsImtpZCI6IlA1VXBPdjBlTXExd2N4TGY3V3hJZzA5SmRTWUdZRkRPV2tsZHVlYUltZjAifQ.eyJjZG5pZXRzIjozMCwiY2RuaXN0dCI6MSwiY2RuaXN0ZCI6MiwiZXhwIjoxNjQxMDc5MjIzLCJjZG5pdWMiOiJyZWdleDpodHRwOi8vY2RuaVxcLmV4YW1wbGUvZm9vL2Jhci9bMC05XXszfVxcLnRzIn0.qp4l3B36rRmIUBXzPWdK7p0_zlq7tvgt5oJSBSMOUEWtMsIZf3q0nXSnHPxsNdLcsTSNoFOAgq5y0EjQmvNQoA
-----END EXAMPLE 'chained-1'-----


-----START EXAMPLE 'chained-2'-----

claims DECODED:
{
  "cdniets": 30,
  "cdnistt": 1,
  "cdnistd": 2,
  "exp": 1641079223,
  "cdniuc": "regex:http://cdni\\.example/foo/bar/[0-9]{3}\\.ts"
}

claims SIGNED:
eyJhbGciOiJFUzI1NiIsImtpZCI6IlA1VXBPdjBlTXExd2N4TGY3V3hJZzA5SmRTWUdZRkRPV2tsZHVlYUltZjAifQ.eyJjZG5pZXRzIjozMCwiY2RuaXN0dCI6MSwiY2RuaXN0ZCI6MiwiZXhwIjoxNjQxMDc5MjIzLCJjZG5pdWMiOiJyZWdleDpodHRwOi8vY2RuaVxcLmV4YW1wbGUvZm9vL2Jhci9bMC05XXszfVxcLnRzIn0.Qrixg5gbwCQjvV5WgW4__NVnOeFXqqudhc202ptkrY8PDQk3BaMop6uG6dzgKk3KT5lTFVzEN9nfN8a1H8bZow
-----END EXAMPLE 'chained-2'-----
```
