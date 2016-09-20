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
  "sub": "uri:http://cdni.example/foo/bar/baz"
}

claims SIGNED:
eyJhbGciOiJFUzI1NiIsImtpZCI6IlA1VXBPdjBlTXExd2N4TGY3V3hJZzA5SmRTWUdZRkRPV2tsZHVlYUltZjAifQ.eyJzdWIiOiJ1cmk6aHR0cDovL2NkbmkuZXhhbXBsZS9mb28vYmFyL2JheiJ9.oC4yKwUchowx4KhMsI8MQ-Sq_1s3fC8NCi-IWcmNEE9MQzEEQfurJ1su2Op_dtYuc_fG8NixSVubz3HWKM4Rsw
-----END EXAMPLE 'simple'-----


-----START EXAMPLE 'complex'-----
'aud' DECRYPTED:  [2001:db8::1/32]
'aud' ENCRYPTED:  eyJhbGciOiJkaXIiLCJraWQiOiJmLVdianhCQzNkUHVJM2QyNGtQMmhmdm9zN1F6Njg4VVRpNmFCMGhOOTk4IiwiZW5jIjoiQTEyOEdDTSJ9..Ewl05cq3jmUe1Bv1.CHif9OMPmsMPgJ8tZgvD0A.R3I2C8nfppY2wBfc4xEPPQ

claims DECODED:
{
  "aud": "eyJhbGciOiJkaXIiLCJraWQiOiJmLVdianhCQzNkUHVJM2QyNGtQMmhmdm9zN1F6Njg4VVRpNmFCMGhOOTk4IiwiZW5jIjoiQTEyOEdDTSJ9..Ewl05cq3jmUe1Bv1.CHif9OMPmsMPgJ8tZgvD0A.R3I2C8nfppY2wBfc4xEPPQ",
  "exp": 1474243500,
  "iat": 1474243200,
  "iss": "Upstream CDN Inc",
  "jti": "5DAafLhZAfhsbe",
  "nbf": 1474243200,
  "sub": "uri-regex:http://cdni\\.example/foo/bar/baz/[0-9]{3}\\.png"
}

claims SIGNED:
eyJhbGciOiJFUzI1NiIsImtpZCI6IlA1VXBPdjBlTXExd2N4TGY3V3hJZzA5SmRTWUdZRkRPV2tsZHVlYUltZjAifQ.eyJhdWQiOiJleUpoYkdjaU9pSmthWElpTENKcmFXUWlPaUptTFZkaWFuaENRek5rVUhWSk0yUXlOR3RRTW1obWRtOXpOMUY2TmpnNFZWUnBObUZDTUdoT09UazRJaXdpWlc1aklqb2lRVEV5T0VkRFRTSjkuLkV3bDA1Y3Ezam1VZTFCdjEuQ0hpZjlPTVBtc01QZ0o4dFpndkQwQS5SM0kyQzhuZnBwWTJ3QmZjNHhFUFBRIiwiZXhwIjoxNDc0MjQzNTAwLCJpYXQiOjE0NzQyNDMyMDAsImlzcyI6IlVwc3RyZWFtIENETiBJbmMiLCJqdGkiOiI1REFhZkxoWkFmaHNiZSIsIm5iZiI6MTQ3NDI0MzIwMCwic3ViIjoidXJpLXJlZ2V4Omh0dHA6Ly9jZG5pXFwuZXhhbXBsZS9mb28vYmFyL2Jhei9bMC05XXszfVxcLnBuZyJ9.AtDNW7mwFIJPqsWAn9ojzj4imE-vTowR-FRzilvnSQuQMz_u4sIspxe6RoXo_Ti8rVMgJ0jOdSvVnQUJZdfRUQ
-----END EXAMPLE 'complex'-----
```
