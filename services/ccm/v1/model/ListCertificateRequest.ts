

export class ListCertificateRequest {
    public limit?: number;
    public name?: string;
    public offset?: number;
    public status?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListCertificateRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListCertificateRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListCertificateRequest {
        this['offset'] = offset;
        return this;
    }
    public withStatus(status: string): ListCertificateRequest {
        this['status'] = status;
        return this;
    }
    public withSortKey(sortKey: string): ListCertificateRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListCertificateRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}