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
eyJhbGciOiJFUzI1NiIsImtpZCI6IlA1VXBPdjBlTXExd2N4TGY3V3hJZzA5SmRTWUdZRkRPV2tsZHVlYUltZjAifQ.ewogICJzdWIiOiAidXJpOmh0dHA6Ly9jZG5pLmV4YW1wbGUvZm9vL2Jhci9iYXoiCn0.Fay99hTiMz4Ic0azF1nMBZi-BWNzMWYZIzLzndipoZK_CwfU7dsKolHGJ1s0xiq2k8KQ3EOhvxuRYVHRZSlHxQ
-----END EXAMPLE 'simple'-----


-----START EXAMPLE 'complex'-----
'aud' DECRYPTED:  [2001:db8::1/32]
'aud' ENCRYPTED:  eyJhbGciOiJkaXIiLCJraWQiOiJmLVdianhCQzNkUHVJM2QyNGtQMmhmdm9zN1F6Njg4VVRpNmFCMGhOOTk4IiwiZW5jIjoiQTEyOEdDTSJ9..GfSKEqKgKROiZLWE.apcxQc3bX0Ewp9JO3VchuA.To6hoQ6rvmBvBFv85xW_5Q

claims DECODED:
{
  "aud": "eyJhbGciOiJkaXIiLCJraWQiOiJmLVdianhCQzNkUHVJM2QyNGtQMmhmdm9zN1F6Njg4VVRpNmFCMGhOOTk4IiwiZW5jIjoiQTEyOEdDTSJ9..GfSKEqKgKROiZLWE.apcxQc3bX0Ewp9JO3VchuA.To6hoQ6rvmBvBFv85xW_5Q",
  "exp": 1474243500,
  "iat": 1474243200,
  "iss": "Upstream CDN Inc",
  "jti": "5DAafLhZAfhsbe",
  "nbf": 1474243200,
  "sub": "uri-regex:http://cdni.example/foo/bar/baz/[0-9]{3}.png"
}

claims SIGNED:
eyJhbGciOiJFUzI1NiIsImtpZCI6IlA1VXBPdjBlTXExd2N4TGY3V3hJZzA5SmRTWUdZRkRPV2tsZHVlYUltZjAifQ.ewogICJhdWQiOiAiZXlKaGJHY2lPaUprYVhJaUxDSnJhV1FpT2lKbUxWZGlhbmhDUXpOa1VIVkpNMlF5Tkd0UU1taG1kbTl6TjFGNk5qZzRWVlJwTm1GQ01HaE9PVGs0SWl3aVpXNWpJam9pUVRFeU9FZERUU0o5Li5HZlNLRXFLZ0tST2laTFdFLmFwY3hRYzNiWDBFd3A5Sk8zVmNodUEuVG82aG9RNnJ2bUJ2QkZ2ODV4V181USIsCiAgImV4cCI6IDE0NzQyNDM1MDAsCiAgImlhdCI6IDE0NzQyNDMyMDAsCiAgImlzcyI6ICJVcHN0cmVhbSBDRE4gSW5jIiwKICAianRpIjogIjVEQWFmTGhaQWZoc2JlIiwKICAibmJmIjogMTQ3NDI0MzIwMCwKICAic3ViIjogInVyaS1yZWdleDpodHRwOi8vY2RuaS5leGFtcGxlL2Zvby9iYXIvYmF6L1swLTldezN9LnBuZyIKfQ.6NhiS3jkR4zxxpPzxaPU2nIbrshaUGaHujgAtwN2PtXoghwFxjqxlKiMDGSimF7JQiW2bM0NcuVgulM8xOZUFw
-----END EXAMPLE 'complex'-----

```
