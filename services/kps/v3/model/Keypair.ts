

export class Keypair {
    public name?: string;
    public type?: KeypairTypeEnum | string;
    public scope?: KeypairScopeEnum | string;
    private 'public_key'?: string;
    public fingerprint?: string;
    private 'is_key_protection'?: boolean;
    private 'frozen_state'?: string;
    public constructor() { 
    }
    public withName(name: string): Keypair {
        this['name'] = name;
        return this;
    }
    public withType(type: KeypairTypeEnum | string): Keypair {
        this['type'] = type;
        return this;
    }
    public withScope(scope: KeypairScopeEnum | string): Keypair {
        this['scope'] = scope;
        return this;
    }
    public withPublicKey(publicKey: string): Keypair {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string  | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey(): string | undefined {
        return this['public_key'];
    }
    public withFingerprint(fingerprint: string): Keypair {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withIsKeyProtection(isKeyProtection: boolean): Keypair {
        this['is_key_protection'] = isKeyProtection;
        return this;
    }
    public set isKeyProtection(isKeyProtection: boolean  | undefined) {
        this['is_key_protection'] = isKeyProtection;
    }
    public get isKeyProtection(): boolean | undefined {
        return this['is_key_protection'];
    }
    public withFrozenState(frozenState: string): Keypair {
        this['frozen_state'] = frozenState;
        return this;
    }
    public set frozenState(frozenState: string  | undefined) {
        this['frozen_state'] = frozenState;
    }
    public get frozenState(): string | undefined {
        return this['frozen_state'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KeypairTypeEnum {
    SSH = 'ssh',
    X509 = 'x509'
}
/**
    * @export
    * @enum {string}
    */
export enum KeypairScopeEnum {
    DOMAIN = 'domain',
    USER = 'user'
}
