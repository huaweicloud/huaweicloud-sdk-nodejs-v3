

export class CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer {
    private 'agency_domain_id': string | undefined;
    private 'agency_domain_name': string | undefined;
    private 'agency_name': string | undefined;
    private 'agency_project_id': string | undefined;
    private 'be_agency_domain_id': string | undefined;
    private 'be_agency_project_id': string | undefined;
    public constructor(agencyDomainId?: any, agencyDomainName?: any, agencyName?: any, agencyProjectId?: any, beAgencyDomainId?: any, beAgencyProjectId?: any) { 
        this['agency_domain_id'] = agencyDomainId;
        this['agency_domain_name'] = agencyDomainName;
        this['agency_name'] = agencyName;
        this['agency_project_id'] = agencyProjectId;
        this['be_agency_domain_id'] = beAgencyDomainId;
        this['be_agency_project_id'] = beAgencyProjectId;
    }
    public withAgencyDomainId(agencyDomainId: string): CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer {
        this['agency_domain_id'] = agencyDomainId;
        return this;
    }
    public set agencyDomainId(agencyDomainId: string | undefined) {
        this['agency_domain_id'] = agencyDomainId;
    }
    public get agencyDomainId() {
        return this['agency_domain_id'];
    }
    public withAgencyDomainName(agencyDomainName: string): CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer {
        this['agency_domain_name'] = agencyDomainName;
        return this;
    }
    public set agencyDomainName(agencyDomainName: string | undefined) {
        this['agency_domain_name'] = agencyDomainName;
    }
    public get agencyDomainName() {
        return this['agency_domain_name'];
    }
    public withAgencyName(agencyName: string): CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName() {
        return this['agency_name'];
    }
    public withAgencyProjectId(agencyProjectId: string): CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer {
        this['agency_project_id'] = agencyProjectId;
        return this;
    }
    public set agencyProjectId(agencyProjectId: string | undefined) {
        this['agency_project_id'] = agencyProjectId;
    }
    public get agencyProjectId() {
        return this['agency_project_id'];
    }
    public withBeAgencyDomainId(beAgencyDomainId: string): CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer {
        this['be_agency_domain_id'] = beAgencyDomainId;
        return this;
    }
    public set beAgencyDomainId(beAgencyDomainId: string | undefined) {
        this['be_agency_domain_id'] = beAgencyDomainId;
    }
    public get beAgencyDomainId() {
        return this['be_agency_domain_id'];
    }
    public withBeAgencyProjectId(beAgencyProjectId: string): CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer {
        this['be_agency_project_id'] = beAgencyProjectId;
        return this;
    }
    public set beAgencyProjectId(beAgencyProjectId: string | undefined) {
        this['be_agency_project_id'] = beAgencyProjectId;
    }
    public get beAgencyProjectId() {
        return this['be_agency_project_id'];
    }
}