

export class AssumeAgencyWithSAMLReqBody {
    private 'duration_seconds'?: number;
    public policy?: string;
    private 'policy_ids'?: Array<string>;
    private 'provider_urn'?: string;
    private 'agency_urn'?: string;
    private 'saml_assertion'?: string;
    public constructor(providerUrn?: string, agencyUrn?: string, samlAssertion?: string) { 
        this['provider_urn'] = providerUrn;
        this['agency_urn'] = agencyUrn;
        this['saml_assertion'] = samlAssertion;
    }
    public withDurationSeconds(durationSeconds: number): AssumeAgencyWithSAMLReqBody {
        this['duration_seconds'] = durationSeconds;
        return this;
    }
    public set durationSeconds(durationSeconds: number  | undefined) {
        this['duration_seconds'] = durationSeconds;
    }
    public get durationSeconds(): number | undefined {
        return this['duration_seconds'];
    }
    public withPolicy(policy: string): AssumeAgencyWithSAMLReqBody {
        this['policy'] = policy;
        return this;
    }
    public withPolicyIds(policyIds: Array<string>): AssumeAgencyWithSAMLReqBody {
        this['policy_ids'] = policyIds;
        return this;
    }
    public set policyIds(policyIds: Array<string>  | undefined) {
        this['policy_ids'] = policyIds;
    }
    public get policyIds(): Array<string> | undefined {
        return this['policy_ids'];
    }
    public withProviderUrn(providerUrn: string): AssumeAgencyWithSAMLReqBody {
        this['provider_urn'] = providerUrn;
        return this;
    }
    public set providerUrn(providerUrn: string  | undefined) {
        this['provider_urn'] = providerUrn;
    }
    public get providerUrn(): string | undefined {
        return this['provider_urn'];
    }
    public withAgencyUrn(agencyUrn: string): AssumeAgencyWithSAMLReqBody {
        this['agency_urn'] = agencyUrn;
        return this;
    }
    public set agencyUrn(agencyUrn: string  | undefined) {
        this['agency_urn'] = agencyUrn;
    }
    public get agencyUrn(): string | undefined {
        return this['agency_urn'];
    }
    public withSamlAssertion(samlAssertion: string): AssumeAgencyWithSAMLReqBody {
        this['saml_assertion'] = samlAssertion;
        return this;
    }
    public set samlAssertion(samlAssertion: string  | undefined) {
        this['saml_assertion'] = samlAssertion;
    }
    public get samlAssertion(): string | undefined {
        return this['saml_assertion'];
    }
}