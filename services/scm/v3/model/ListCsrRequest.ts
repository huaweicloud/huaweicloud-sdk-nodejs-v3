

export class ListCsrRequest {
    public limit?: number;
    public offset?: number;
    public name?: string;
    private 'private_key_algo'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListCsrRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListCsrRequest {
        this['offset'] = offset;
        return this;
    }
    public withName(name: string): ListCsrRequest {
        this['name'] = name;
        return this;
    }
    public withPrivateKeyAlgo(privateKeyAlgo: string): ListCsrRequest {
        this['private_key_algo'] = privateKeyAlgo;
        return this;
    }
    public set privateKeyAlgo(privateKeyAlgo: string  | undefined) {
        this['private_key_algo'] = privateKeyAlgo;
    }
    public get privateKeyAlgo(): string | undefined {
        return this['private_key_algo'];
    }
}