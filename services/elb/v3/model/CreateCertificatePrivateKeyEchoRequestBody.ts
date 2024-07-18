

export class CreateCertificatePrivateKeyEchoRequestBody {
    private 'private_key_echo'?: boolean;
    public constructor(privateKeyEcho?: boolean) { 
        this['private_key_echo'] = privateKeyEcho;
    }
    public withPrivateKeyEcho(privateKeyEcho: boolean): CreateCertificatePrivateKeyEchoRequestBody {
        this['private_key_echo'] = privateKeyEcho;
        return this;
    }
    public set privateKeyEcho(privateKeyEcho: boolean  | undefined) {
        this['private_key_echo'] = privateKeyEcho;
    }
    public get privateKeyEcho(): boolean | undefined {
        return this['private_key_echo'];
    }
}