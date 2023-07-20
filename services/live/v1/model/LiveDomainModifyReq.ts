

export class LiveDomainModifyReq {
    public domain?: string;
    public status?: LiveDomainModifyReqStatusEnum | string;
    private 'enterprise_project_id'?: string;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): LiveDomainModifyReq {
        this['domain'] = domain;
        return this;
    }
    public withStatus(status: LiveDomainModifyReqStatusEnum | string): LiveDomainModifyReq {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): LiveDomainModifyReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LiveDomainModifyReqStatusEnum {
    ON = 'on',
    OFF = 'off'
}
