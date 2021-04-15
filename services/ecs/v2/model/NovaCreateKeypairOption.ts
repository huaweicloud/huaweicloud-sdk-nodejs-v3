

export class NovaCreateKeypairOption {
    private 'public_key'?: string | undefined;
    public type?: NovaCreateKeypairOptionTypeEnum;
    public name: string;
    private 'user_id'?: string | undefined;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withPublicKey(publicKey: string): NovaCreateKeypairOption {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey() {
        return this['public_key'];
    }
    public withType(type: NovaCreateKeypairOptionTypeEnum): NovaCreateKeypairOption {
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
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
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
