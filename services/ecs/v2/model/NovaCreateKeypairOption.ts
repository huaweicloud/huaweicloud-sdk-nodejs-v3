

export class NovaCreateKeypairOption {
    private 'public_key'?: string;
    public type?: NovaCreateKeypairOptionTypeEnum | string;
    public name?: string;
    private 'user_id'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withPublicKey(publicKey: string): NovaCreateKeypairOption {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string  | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey(): string | undefined {
        return this['public_key'];
    }
    public withType(type: NovaCreateKeypairOptionTypeEnum | string): NovaCreateKeypairOption {
        this['type'] = type;
        return this;
    }
    public withName(name: string): NovaCreateKeypairOption {
        this['name'] = name;
        return this;
    }
    public withUserId(userId: string): NovaCreateKeypairOption {
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
export enum NovaCreateKeypairOptionTypeEnum {
    SSH = 'ssh',
    X509 = 'x509'
}
