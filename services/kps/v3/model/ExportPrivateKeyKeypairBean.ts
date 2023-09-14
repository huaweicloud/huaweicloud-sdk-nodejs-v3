

export class ExportPrivateKeyKeypairBean {
    public name?: string;
    private 'private_key'?: string;
    public constructor(name?: string, privateKey?: string) { 
        this['name'] = name;
        this['private_key'] = privateKey;
    }
    public withName(name: string): ExportPrivateKeyKeypairBean {
        this['name'] = name;
        return this;
    }
    public withPrivateKey(privateKey: string): ExportPrivateKeyKeypairBean {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
}