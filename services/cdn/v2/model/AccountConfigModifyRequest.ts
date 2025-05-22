

export class AccountConfigModifyRequest {
    private 'obs_agency_status'?: string;
    private 'scm_agency_status'?: string;
    public constructor() { 
    }
    public withObsAgencyStatus(obsAgencyStatus: string): AccountConfigModifyRequest {
        this['obs_agency_status'] = obsAgencyStatus;
        return this;
    }
    public set obsAgencyStatus(obsAgencyStatus: string  | undefined) {
        this['obs_agency_status'] = obsAgencyStatus;
    }
    public get obsAgencyStatus(): string | undefined {
        return this['obs_agency_status'];
    }
    public withScmAgencyStatus(scmAgencyStatus: string): AccountConfigModifyRequest {
        this['scm_agency_status'] = scmAgencyStatus;
        return this;
    }
    public set scmAgencyStatus(scmAgencyStatus: string  | undefined) {
        this['scm_agency_status'] = scmAgencyStatus;
    }
    public get scmAgencyStatus(): string | undefined {
        return this['scm_agency_status'];
    }
}