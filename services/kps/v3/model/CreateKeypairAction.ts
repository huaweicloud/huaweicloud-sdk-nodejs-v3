import { KeyProtection } from './KeyProtection';


export class CreateKeypairAction {
    public name?: string;
    public type?: CreateKeypairActionTypeEnum | string;
    private 'public_key'?: string;
    public scope?: CreateKeypairActionScopeEnum | string;
    private 'user_id'?: string;
    private 'key_protection'?: KeyProtection;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateKeypairAction {
        this['name'] = name;
        return this;
    }
    public withType(type: CreateKeypairActionTypeEnum | string): CreateKeypairAction {
        this['type'] = type;
        return this;
    }
    public withPublicKey(publicKey: string): CreateKeypairAction {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string  | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey(): string | undefined {
        return this['public_key'];
    }
    public withScope(scope: CreateKeypairActionScopeEnum | string): CreateKeypairAction {
        this['scope'] = scope;
        return this;
    }
    public withUserId(userId: string): CreateKeypairAction {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withKeyProtection(keyProtection: KeyProtection): CreateKeypairAction {
        this['key_protection'] = keyProtection;
        return this;
    }
    public set keyProtection(keyProtection: KeyProtection  | undefined) {
        this['key_protection'] = keyProtection;
    }
    public get keyProtection(): KeyProtection | undefined {
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
