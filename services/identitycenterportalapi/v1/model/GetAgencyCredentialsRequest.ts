

export class GetAgencyCredentialsRequest {
    private 'access-token'?: string;
    private 'target_account_id'?: string;
    private 'agency_urn'?: string;
    public constructor(accessToken?: string, targetAccountId?: string, agencyUrn?: string) { 
        this['access-token'] = accessToken;
        this['target_account_id'] = targetAccountId;
        this['agency_urn'] = agencyUrn;
    }
    public withAccessToken(accessToken: string): GetAgencyCredentialsRequest {
        this['access-token'] = accessToken;
        return this;
    }
    public set accessToken(accessToken: string  | undefined) {
        this['access-token'] = accessToken;
    }
    public get accessToken(): string | undefined {
        return this['access-token'];
    }
    public withTargetAccountId(targetAccountId: string): GetAgencyCredentialsRequest {
        this['target_account_id'] = targetAccountId;
        return this;
    }
    public set targetAccountId(targetAccountId: string  | undefined) {
        this['target_account_id'] = targetAccountId;
    }
    public get targetAccountId(): string | undefined {
        return this['target_account_id'];
    }
    public withAgencyUrn(agencyUrn: string): GetAgencyCredentialsRequest {
        this['agency_urn'] = agencyUrn;
        return this;
    }
    public set agencyUrn(agencyUrn: string  | undefined) {
        this['agency_urn'] = agencyUrn;
    }
    public get agencyUrn(): string | undefined {
        return this['agency_urn'];
    }
}