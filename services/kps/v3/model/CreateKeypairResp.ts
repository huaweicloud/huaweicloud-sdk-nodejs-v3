

export class CreateKeypairResp {
    public name?: string;
    public type?: CreateKeypairRespTypeEnum | string;
    private 'public_key'?: string;
    private 'private_key'?: string;
    public fingerprint?: string;
    private 'user_id'?: string;
    public constructor() { 
    }
    public withName(name: string): CreateKeypairResp {
        this['name'] = name;
        return this;
    }
    public withType(type: CreateKeypairRespTypeEnum | string): CreateKeypairResp {
        this['type'] = type;
        return this;
    }
    public withPublicKey(publicKey: string): CreateKeypairResp {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string  | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey(): string | undefined {
        return this['public_key'];
    }
    public withPrivateKey(privateKey: string): CreateKeypairResp {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withFingerprint(fingerprint: string): CreateKeypairResp {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withUserId(userId: string): CreateKeypairResp {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateKeypairRespTypeEnum {
    SSH = 'ssh',
    X509 = 'x509'
}
