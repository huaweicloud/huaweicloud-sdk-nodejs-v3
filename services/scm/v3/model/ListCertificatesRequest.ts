

export class ListCertificatesRequest {
    public limit?: number;
    public offset?: number;
    private 'sort_dir'?: string;
    private 'sort_key'?: string;
    public status?: string;
    private 'enterprise_project_id'?: string;
    private 'deploy_support'?: boolean;
    private 'owned_by_self'?: boolean;
    private 'expired_days_since'?: number;
    public content?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListCertificatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListCertificatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortDir(sortDir: string): ListCertificatesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListCertificatesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withStatus(status: string): ListCertificatesRequest {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCertificatesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDeploySupport(deploySupport: boolean): ListCertificatesRequest {
        this['deploy_support'] = deploySupport;
        return this;
    }
    public set deploySupport(deploySupport: boolean  | undefined) {
        this['deploy_support'] = deploySupport;
    }
    public get deploySupport(): boolean | undefined {
        return this['deploy_support'];
    }
    public withOwnedBySelf(ownedBySelf: boolean): ListCertificatesRequest {
        this['owned_by_self'] = ownedBySelf;
        return this;
    }
    public set ownedBySelf(ownedBySelf: boolean  | undefined) {
        this['owned_by_self'] = ownedBySelf;
    }
    public get ownedBySelf(): boolean | undefined {
        return this['owned_by_self'];
    }
    public withExpiredDaysSince(expiredDaysSince: number): ListCertificatesRequest {
        this['expired_days_since'] = expiredDaysSince;
        return this;
    }
    public set expiredDaysSince(expiredDaysSince: number  | undefined) {
        this['expired_days_since'] = expiredDaysSince;
    }
    public get expiredDaysSince(): number | undefined {
        return this['expired_days_since'];
    }
    public withContent(content: string): ListCertificatesRequest {
        this['content'] = content;
        return this;
    }
}