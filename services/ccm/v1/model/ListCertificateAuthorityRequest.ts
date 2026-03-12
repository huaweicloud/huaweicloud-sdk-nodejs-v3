

export class ListCertificateAuthorityRequest {
    public limit?: number;
    public name?: string;
    public offset?: number;
    public status?: string;
    public type?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListCertificateAuthorityRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListCertificateAuthorityRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListCertificateAuthorityRequest {
        this['offset'] = offset;
        return this;
    }
    public withStatus(status: string): ListCertificateAuthorityRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ListCertificateAuthorityRequest {
        this['type'] = type;
        return this;
    }
    public withSortKey(sortKey: string): ListCertificateAuthorityRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListCertificateAuthorityRequest {
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