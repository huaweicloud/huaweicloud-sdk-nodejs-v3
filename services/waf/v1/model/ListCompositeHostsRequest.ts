

export class ListCompositeHostsRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public page?: number;
    public pagesize?: number;
    public hostname?: string;
    public policyname?: string;
    private 'protect_status'?: number | undefined;
    private 'waf_type'?: string | undefined;
    private 'is_https'?: boolean | undefined;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListCompositeHostsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCompositeHostsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withPage(page: number): ListCompositeHostsRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListCompositeHostsRequest {
        this['pagesize'] = pagesize;
        return this;
    }
    public withHostname(hostname: string): ListCompositeHostsRequest {
        this['hostname'] = hostname;
        return this;
    }
    public withPolicyname(policyname: string): ListCompositeHostsRequest {
        this['policyname'] = policyname;
        return this;
    }
    public withProtectStatus(protectStatus: number): ListCompositeHostsRequest {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus() {
        return this['protect_status'];
    }
    public withWafType(wafType: string): ListCompositeHostsRequest {
        this['waf_type'] = wafType;
        return this;
    }
    public set wafType(wafType: string | undefined) {
        this['waf_type'] = wafType;
    }
    public get wafType() {
        return this['waf_type'];
    }
    public withIsHttps(isHttps: boolean): ListCompositeHostsRequest {
        this['is_https'] = isHttps;
        return this;
    }
    public set isHttps(isHttps: boolean | undefined) {
        this['is_https'] = isHttps;
    }
    public get isHttps() {
        return this['is_https'];
    }
}