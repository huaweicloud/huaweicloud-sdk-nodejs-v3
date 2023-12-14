

export class PreviewAgencyLogAccessReqBody {
    private 'agency_access_type'?: PreviewAgencyLogAccessReqBodyAgencyAccessTypeEnum | string;
    private 'agency_log_access'?: string;
    private 'log_agencyStream_name'?: string;
    private 'log_agencyStream_id'?: string;
    private 'log_agencyGroup_name'?: string;
    private 'log_agencyGroup_id'?: string;
    private 'log_beAgencystream_name'?: string;
    private 'log_beAgencystream_id'?: string;
    private 'log_beAgencygroup_name'?: string;
    private 'log_beAgencygroup_id'?: string;
    private 'be_agency_project_id'?: string;
    private 'agency_project_id'?: string;
    private 'agency_domain_name'?: string;
    private 'agency_name'?: string;
    public constructor(agencyAccessType?: string, agencyLogAccess?: string, logAgencyStreamName?: string, logAgencyStreamId?: string, logAgencyGroupName?: string, logAgencyGroupId?: string, logBeAgencystreamName?: string, logBeAgencystreamId?: string, logBeAgencygroupName?: string, logBeAgencygroupId?: string, beAgencyProjectId?: string, agencyProjectId?: string, agencyDomainName?: string, agencyName?: string) { 
        this['agency_access_type'] = agencyAccessType;
        this['agency_log_access'] = agencyLogAccess;
        this['log_agencyStream_name'] = logAgencyStreamName;
        this['log_agencyStream_id'] = logAgencyStreamId;
        this['log_agencyGroup_name'] = logAgencyGroupName;
        this['log_agencyGroup_id'] = logAgencyGroupId;
        this['log_beAgencystream_name'] = logBeAgencystreamName;
        this['log_beAgencystream_id'] = logBeAgencystreamId;
        this['log_beAgencygroup_name'] = logBeAgencygroupName;
        this['log_beAgencygroup_id'] = logBeAgencygroupId;
        this['be_agency_project_id'] = beAgencyProjectId;
        this['agency_project_id'] = agencyProjectId;
        this['agency_domain_name'] = agencyDomainName;
        this['agency_name'] = agencyName;
    }
    public withAgencyAccessType(agencyAccessType: PreviewAgencyLogAccessReqBodyAgencyAccessTypeEnum | string): PreviewAgencyLogAccessReqBody {
        this['agency_access_type'] = agencyAccessType;
        return this;
    }
    public set agencyAccessType(agencyAccessType: PreviewAgencyLogAccessReqBodyAgencyAccessTypeEnum | string  | undefined) {
        this['agency_access_type'] = agencyAccessType;
    }
    public get agencyAccessType(): PreviewAgencyLogAccessReqBodyAgencyAccessTypeEnum | string | undefined {
        return this['agency_access_type'];
    }
    public withAgencyLogAccess(agencyLogAccess: string): PreviewAgencyLogAccessReqBody {
        this['agency_log_access'] = agencyLogAccess;
        return this;
    }
    public set agencyLogAccess(agencyLogAccess: string  | undefined) {
        this['agency_log_access'] = agencyLogAccess;
    }
    public get agencyLogAccess(): string | undefined {
        return this['agency_log_access'];
    }
    public withLogAgencyStreamName(logAgencyStreamName: string): PreviewAgencyLogAccessReqBody {
        this['log_agencyStream_name'] = logAgencyStreamName;
        return this;
    }
    public set logAgencyStreamName(logAgencyStreamName: string  | undefined) {
        this['log_agencyStream_name'] = logAgencyStreamName;
    }
    public get logAgencyStreamName(): string | undefined {
        return this['log_agencyStream_name'];
    }
    public withLogAgencyStreamId(logAgencyStreamId: string): PreviewAgencyLogAccessReqBody {
        this['log_agencyStream_id'] = logAgencyStreamId;
        return this;
    }
    public set logAgencyStreamId(logAgencyStreamId: string  | undefined) {
        this['log_agencyStream_id'] = logAgencyStreamId;
    }
    public get logAgencyStreamId(): string | undefined {
        return this['log_agencyStream_id'];
    }
    public withLogAgencyGroupName(logAgencyGroupName: string): PreviewAgencyLogAccessReqBody {
        this['log_agencyGroup_name'] = logAgencyGroupName;
        return this;
    }
    public set logAgencyGroupName(logAgencyGroupName: string  | undefined) {
        this['log_agencyGroup_name'] = logAgencyGroupName;
    }
    public get logAgencyGroupName(): string | undefined {
        return this['log_agencyGroup_name'];
    }
    public withLogAgencyGroupId(logAgencyGroupId: string): PreviewAgencyLogAccessReqBody {
        this['log_agencyGroup_id'] = logAgencyGroupId;
        return this;
    }
    public set logAgencyGroupId(logAgencyGroupId: string  | undefined) {
        this['log_agencyGroup_id'] = logAgencyGroupId;
    }
    public get logAgencyGroupId(): string | undefined {
        return this['log_agencyGroup_id'];
    }
    public withLogBeAgencystreamName(logBeAgencystreamName: string): PreviewAgencyLogAccessReqBody {
        this['log_beAgencystream_name'] = logBeAgencystreamName;
        return this;
    }
    public set logBeAgencystreamName(logBeAgencystreamName: string  | undefined) {
        this['log_beAgencystream_name'] = logBeAgencystreamName;
    }
    public get logBeAgencystreamName(): string | undefined {
        return this['log_beAgencystream_name'];
    }
    public withLogBeAgencystreamId(logBeAgencystreamId: string): PreviewAgencyLogAccessReqBody {
        this['log_beAgencystream_id'] = logBeAgencystreamId;
        return this;
    }
    public set logBeAgencystreamId(logBeAgencystreamId: string  | undefined) {
        this['log_beAgencystream_id'] = logBeAgencystreamId;
    }
    public get logBeAgencystreamId(): string | undefined {
        return this['log_beAgencystream_id'];
    }
    public withLogBeAgencygroupName(logBeAgencygroupName: string): PreviewAgencyLogAccessReqBody {
        this['log_beAgencygroup_name'] = logBeAgencygroupName;
        return this;
    }
    public set logBeAgencygroupName(logBeAgencygroupName: string  | undefined) {
        this['log_beAgencygroup_name'] = logBeAgencygroupName;
    }
    public get logBeAgencygroupName(): string | undefined {
        return this['log_beAgencygroup_name'];
    }
    public withLogBeAgencygroupId(logBeAgencygroupId: string): PreviewAgencyLogAccessReqBody {
        this['log_beAgencygroup_id'] = logBeAgencygroupId;
        return this;
    }
    public set logBeAgencygroupId(logBeAgencygroupId: string  | undefined) {
        this['log_beAgencygroup_id'] = logBeAgencygroupId;
    }
    public get logBeAgencygroupId(): string | undefined {
        return this['log_beAgencygroup_id'];
    }
    public withBeAgencyProjectId(beAgencyProjectId: string): PreviewAgencyLogAccessReqBody {
        this['be_agency_project_id'] = beAgencyProjectId;
        return this;
    }
    public set beAgencyProjectId(beAgencyProjectId: string  | undefined) {
        this['be_agency_project_id'] = beAgencyProjectId;
    }
    public get beAgencyProjectId(): string | undefined {
        return this['be_agency_project_id'];
    }
    public withAgencyProjectId(agencyProjectId: string): PreviewAgencyLogAccessReqBody {
        this['agency_project_id'] = agencyProjectId;
        return this;
    }
    public set agencyProjectId(agencyProjectId: string  | undefined) {
        this['agency_project_id'] = agencyProjectId;
    }
    public get agencyProjectId(): string | undefined {
        return this['agency_project_id'];
    }
    public withAgencyDomainName(agencyDomainName: string): PreviewAgencyLogAccessReqBody {
        this['agency_domain_name'] = agencyDomainName;
        return this;
    }
    public set agencyDomainName(agencyDomainName: string  | undefined) {
        this['agency_domain_name'] = agencyDomainName;
    }
    public get agencyDomainName(): string | undefined {
        return this['agency_domain_name'];
    }
    public withAgencyName(agencyName: string): PreviewAgencyLogAccessReqBody {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PreviewAgencyLogAccessReqBodyAgencyAccessTypeEnum {
    AGENCYACCESS = 'AGENCYACCESS'
}
