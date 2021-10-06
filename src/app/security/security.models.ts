export interface userCredentials{
    name: string;
    password: string;
}

export interface authenticationResponse{
    token: string;
    expiration: Date;
}

export interface userDTO{
    id: string;
    name: string;
}