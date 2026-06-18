

export class AssumeAgencyWithOIDCReqBody {
    private 'duration_seconds'?: number;
    public policy?: string;
    private 'policy_ids'?: Array<string>;
    private 'provider_urn'?: string;
    private 'agency_urn'?: string;
    private 'agency_session_name'?: string;
    private 'id_token'?: string;
    public constructor(providerUrn?: string, agencyUrn?: string, agencySessionName?: string, idToken?: string) { 
        this['provider_urn'] = providerUrn;
        this['agency_urn'] = agencyUrn;
        this['agency_session_name'] = agencySessionName;
        this['id_token'] = idToken;
    }
    public withDurationSeconds(durationSeconds: number): AssumeAgencyWithOIDCReqBody {
        this['duration_seconds'] = durationSeconds;
        return this;
    }
    public set durationSeconds(durationSeconds: number  | undefined) {
        this['duration_seconds'] = durationSeconds;
    }
    public get durationSeconds(): number | undefined {
        return this['duration_seconds'];
    }
    public withPolicy(policy: string): AssumeAgencyWithOIDCReqBody {
        this['policy'] = policy;
        return this;
    }
    public withPolicyIds(policyIds: Array<string>): AssumeAgencyWithOIDCReqBody {
        this['policy_ids'] = policyIds;
        return this;
    }
    public set policyIds(policyIds: Array<string>  | undefined) {
        this['policy_ids'] = policyIds;
    }
    public get policyIds(): Array<string> | undefined {
        return this['policy_ids'];
    }
    public withProviderUrn(providerUrn: string): AssumeAgencyWithOIDCReqBody {
        this['provider_urn'] = providerUrn;
        return this;
    }
    public set providerUrn(providerUrn: string  | undefined) {
        this['provider_urn'] = providerUrn;
    }
    public get providerUrn(): string | undefined {
        return this['provider_urn'];
    }
    public withAgencyUrn(agencyUrn: string): AssumeAgencyWithOIDCReqBody {
        this['agency_urn'] = agencyUrn;
        return this;
    }
    public set agencyUrn(agencyUrn: string  | undefined) {
        this['agency_urn'] = agencyUrn;
    }
    public get agencyUrn(): string | undefined {
        return this['agency_urn'];
    }
    public withAgencySessionName(agencySessionName: string): AssumeAgencyWithOIDCReqBody {
        this['agency_session_name'] = agencySessionName;
        return this;
    }
    public set agencySessionName(agencySessionName: string  | undefined) {
        this['agency_session_name'] = agencySessionName;
    }
    public get agencySessionName(): string | undefined {
        return this['agency_session_name'];
    }
    public withIdToken(idToken: string): AssumeAgencyWithOIDCReqBody {
        this['id_token'] = idToken;
        return this;
    }
    public set idToken(idToken: string  | undefined) {
        this['id_token'] = idToken;
    }
    public get idToken(): string | undefined {
        return this['id_token'];
    }
}