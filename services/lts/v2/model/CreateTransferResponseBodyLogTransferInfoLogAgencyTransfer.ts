

export class CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer {
    private 'agency_domain_id'?: string;
    private 'agency_domain_name'?: string;
    private 'agency_name'?: string;
    private 'agency_project_id'?: string;
    private 'be_agency_domain_id'?: string;
    private 'be_agency_project_id'?: string;
    public constructor(agencyDomainId?: string, agencyDomainName?: string, agencyName?: string, agencyProjectId?: string, beAgencyDomainId?: string, beAgencyProjectId?: string) { 
        this['agency_domain_id'] = agencyDomainId;
        this['agency_domain_name'] = agencyDomainName;
        this['agency_name'] = agencyName;
        this['agency_project_id'] = agencyProjectId;
        this['be_agency_domain_id'] = beAgencyDomainId;
        this['be_agency_project_id'] = beAgencyProjectId;
    }
    public withAgencyDomainId(agencyDomainId: string): CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer {
        this['agency_domain_id'] = agencyDomainId;
        return this;
    }
    public set agencyDomainId(agencyDomainId: string  | undefined) {
        this['agency_domain_id'] = agencyDomainId;
    }
    public get agencyDomainId(): string | undefined {
        return this['agency_domain_id'];
    }
    public withAgencyDomainName(agencyDomainName: string): CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer {
        this['agency_domain_name'] = agencyDomainName;
        return this;
    }
    public set agencyDomainName(agencyDomainName: string  | undefined) {
        this['agency_domain_name'] = agencyDomainName;
    }
    public get agencyDomainName(): string | undefined {
        return this['agency_domain_name'];
    }
    public withAgencyName(agencyName: string): CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withAgencyProjectId(agencyProjectId: string): CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer {
        this['agency_project_id'] = agencyProjectId;
        return this;
    }
    public set agencyProjectId(agencyProjectId: string  | undefined) {
        this['agency_project_id'] = agencyProjectId;
    }
    public get agencyProjectId(): string | undefined {
        return this['agency_project_id'];
    }
    public withBeAgencyDomainId(beAgencyDomainId: string): CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer {
        this['be_agency_domain_id'] = beAgencyDomainId;
        return this;
    }
    public set beAgencyDomainId(beAgencyDomainId: string  | undefined) {
        this['be_agency_domain_id'] = beAgencyDomainId;
    }
    public get beAgencyDomainId(): string | undefined {
        return this['be_agency_domain_id'];
    }
    public withBeAgencyProjectId(beAgencyProjectId: string): CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer {
        this['be_agency_project_id'] = beAgencyProjectId;
        return this;
    }
    public set beAgencyProjectId(beAgencyProjectId: string  | undefined) {
        this['be_agency_project_id'] = beAgencyProjectId;
    }
    public get beAgencyProjectId(): string | undefined {
        return this['be_agency_project_id'];
    }
}