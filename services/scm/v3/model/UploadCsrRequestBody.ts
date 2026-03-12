

export class UploadCsrRequestBody {
    public name?: string;
    public csr?: string;
    private 'private_key'?: string;
    public constructor(name?: string, csr?: string) { 
        this['name'] = name;
        this['csr'] = csr;
    }
    public withName(name: string): UploadCsrRequestBody {
        this['name'] = name;
        return this;
    }
    public withCsr(csr: string): UploadCsrRequestBody {
        this['csr'] = csr;
        return this;
    }
    public withPrivateKey(privateKey: string): UploadCsrRequestBody {
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