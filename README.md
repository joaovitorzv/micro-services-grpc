## Micro-services With gRPC

2 microServices:

1. User (credentials, all informations)

request
POST api.auth0.com -> (email, name, username, password) -> REST 2s
express = axios.post('api.auth0.com'...) { JSON }


request (with gRPC)
api.auth0.com:500121 -> createUser(email, name, username, password) -> 0.4s
express = grpc.client.createUser(...) { Here the data come with HTTP2 protocol and as buffer}

