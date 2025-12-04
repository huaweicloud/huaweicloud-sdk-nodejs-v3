

export class ListPremiumHostRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public page?: string;
    public pagesize?: string;
    public hostname?: string;
    public policyname?: string;
    private 'protect_status'?: ListPremiumHostRequestProtectStatusEnum | number;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListPremiumHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPremiumHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPage(page: string): ListPremiumHostRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: string): ListPremiumHostRequest {
        this['pagesize'] = pagesize;
        return this;
    }
    public withHostname(hostname: string): ListPremiumHostRequest {
        this['hostname'] = hostname;
        return this;
    }
    public withPolicyname(policyname: string): ListPremiumHostRequest {
        this['policyname'] = policyname;
        return this;
    }
    public withProtectStatus(protectStatus: ListPremiumHostRequestProtectStatusEnum | number): ListPremiumHostRequest {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: ListPremiumHostRequestProtectStatusEnum | number  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): ListPremiumHostRequestProtectStatusEnum | number | undefined {
        return this['protect_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPremiumHostRequestProtectStatusEnum {
    NUMBER_MINUS_1 = -1,
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
