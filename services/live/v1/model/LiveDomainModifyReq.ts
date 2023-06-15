

export class LiveDomainModifyReq {
    public domain: string;
    public status?: LiveDomainModifyReqStatusEnum;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(domain?: any) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): LiveDomainModifyReq {
        this['domain'] = domain;
        return this;
    }
    public withStatus(status: LiveDomainModifyReqStatusEnum): LiveDomainModifyReq {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): LiveDomainModifyReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
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
