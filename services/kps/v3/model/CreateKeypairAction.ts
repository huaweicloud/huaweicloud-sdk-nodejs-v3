import { KeyProtection } from './KeyProtection';


export class CreateKeypairAction {
    public name: string;
    public type?: CreateKeypairActionTypeEnum;
    private 'public_key'?: string | undefined;
    public scope?: CreateKeypairActionScopeEnum;
    private 'user_id'?: string | undefined;
    private 'key_protection'?: KeyProtection | undefined;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): CreateKeypairAction {
        this['name'] = name;
        return this;
    }
    public withType(type: CreateKeypairActionTypeEnum): CreateKeypairAction {
        this['type'] = type;
        return this;
    }
    public withPublicKey(publicKey: string): CreateKeypairAction {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey() {
        return this['public_key'];
    }
    public withScope(scope: CreateKeypairActionScopeEnum): CreateKeypairAction {
        this['scope'] = scope;
        return this;
    }
    public withUserId(userId: string): CreateKeypairAction {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withKeyProtection(keyProtection: KeyProtection): CreateKeypairAction {
        this['key_protection'] = keyProtection;
        return this;
    }
    public set keyProtection(keyProtection: KeyProtection | undefined) {
        this['key_protection'] = keyProtection;
    }
    public get keyProtection() {
        return this['key_protection'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateKeypairActionTypeEnum {
    SSH = 'ssh',
    X509 = 'x509'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateKeypairActionScopeEnum {
    DOMAIN = 'domain',
    USER = 'user'
}
