

export class NovaSimpleKeypair {
    public fingerprint: string;
    public name: string;
    private 'public_key': string | undefined;
    public type?: string;
    public constructor(fingerprint?: any, name?: any, publicKey?: any) { 
        this['fingerprint'] = fingerprint;
        this['name'] = name;
        this['public_key'] = publicKey;
    }
    public withFingerprint(fingerprint: string): NovaSimpleKeypair {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withName(name: string): NovaSimpleKeypair {
        this['name'] = name;
        return this;
    }
    public withPublicKey(publicKey: string): NovaSimpleKeypair {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey() {
        return this['public_key'];
    }
    public withType(type: string): NovaSimpleKeypair {
        this['type'] = type;
        return this;
    }
}