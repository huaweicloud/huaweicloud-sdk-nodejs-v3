

export class NovaKeypair {
    public fingerprint?: string;
    public name?: string;
    private 'public_key'?: string;
    private 'private_key'?: string;
    private 'user_id'?: string;
    public type?: string;
    public constructor(fingerprint?: string, name?: string, publicKey?: string, privateKey?: string, userId?: string) { 
        this['fingerprint'] = fingerprint;
        this['name'] = name;
        this['public_key'] = publicKey;
        this['private_key'] = privateKey;
        this['user_id'] = userId;
    }
    public withFingerprint(fingerprint: string): NovaKeypair {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withName(name: string): NovaKeypair {
        this['name'] = name;
        return this;
    }
    public withPublicKey(publicKey: string): NovaKeypair {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string  | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey(): string | undefined {
        return this['public_key'];
    }
    public withPrivateKey(privateKey: string): NovaKeypair {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withUserId(userId: string): NovaKeypair {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withType(type: string): NovaKeypair {
        this['type'] = type;
        return this;
    }
}