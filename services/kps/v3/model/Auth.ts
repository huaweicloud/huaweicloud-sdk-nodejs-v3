

export class Auth {
    public type?: AuthTypeEnum | string;
    public key?: string;
    public constructor() { 
    }
    public withType(type: AuthTypeEnum | string): Auth {
        this['type'] = type;
        return this;
    }
    public withKey(key: string): Auth {
        this['key'] = key;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AuthTypeEnum {
    PASSWORD = 'password',
    KEYPAIR = 'keypair'
}
