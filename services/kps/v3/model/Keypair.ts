

export class Keypair {
    public name?: string;
    public type?: KeypairTypeEnum;
    public scope?: KeypairScopeEnum;
    private 'public_key'?: string | undefined;
    public fingerprint?: string;
    private 'is_key_protection'?: boolean | undefined;
    private 'frozen_state'?: string | undefined;
    public constructor() { 
    }
    public withName(name: string): Keypair {
        this['name'] = name;
        return this;
    }
    public withType(type: KeypairTypeEnum): Keypair {
        this['type'] = type;
        return this;
    }
    public withScope(scope: KeypairScopeEnum): Keypair {
        this['scope'] = scope;
        return this;
    }
    public withPublicKey(publicKey: string): Keypair {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey() {
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
    public set isKeyProtection(isKeyProtection: boolean | undefined) {
        this['is_key_protection'] = isKeyProtection;
    }
    public get isKeyProtection() {
        return this['is_key_protection'];
    }
    public withFrozenState(frozenState: string): Keypair {
        this['frozen_state'] = frozenState;
        return this;
    }
    public set frozenState(frozenState: string | undefined) {
        this['frozen_state'] = frozenState;
    }
    public get frozenState() {
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
