import { StsTag } from './StsTag';


export class GetResourceStsTokenRequestBody {
    private 'resource_credential_provider_name'?: string;
    private 'workload_access_token'?: string;
    private 'agency_session_name'?: string;
    private 'duration_seconds'?: number;
    public policy?: string;
    private 'source_identity'?: string;
    public tags?: Array<StsTag>;
    private 'transitive_tag_keys'?: Array<string>;
    public constructor(resourceCredentialProviderName?: string, agencySessionName?: string) { 
        this['resource_credential_provider_name'] = resourceCredentialProviderName;
        this['agency_session_name'] = agencySessionName;
    }
    public withResourceCredentialProviderName(resourceCredentialProviderName: string): GetResourceStsTokenRequestBody {
        this['resource_credential_provider_name'] = resourceCredentialProviderName;
        return this;
    }
    public set resourceCredentialProviderName(resourceCredentialProviderName: string  | undefined) {
        this['resource_credential_provider_name'] = resourceCredentialProviderName;
    }
    public get resourceCredentialProviderName(): string | undefined {
        return this['resource_credential_provider_name'];
    }
    public withWorkloadAccessToken(workloadAccessToken: string): GetResourceStsTokenRequestBody {
        this['workload_access_token'] = workloadAccessToken;
        return this;
    }
    public set workloadAccessToken(workloadAccessToken: string  | undefined) {
        this['workload_access_token'] = workloadAccessToken;
    }
    public get workloadAccessToken(): string | undefined {
        return this['workload_access_token'];
    }
    public withAgencySessionName(agencySessionName: string): GetResourceStsTokenRequestBody {
        this['agency_session_name'] = agencySessionName;
        return this;
    }
    public set agencySessionName(agencySessionName: string  | undefined) {
        this['agency_session_name'] = agencySessionName;
    }
    public get agencySessionName(): string | undefined {
        return this['agency_session_name'];
    }
    public withDurationSeconds(durationSeconds: number): GetResourceStsTokenRequestBody {
        this['duration_seconds'] = durationSeconds;
        return this;
    }
    public set durationSeconds(durationSeconds: number  | undefined) {
        this['duration_seconds'] = durationSeconds;
    }
    public get durationSeconds(): number | undefined {
        return this['duration_seconds'];
    }
    public withPolicy(policy: string): GetResourceStsTokenRequestBody {
        this['policy'] = policy;
        return this;
    }
    public withSourceIdentity(sourceIdentity: string): GetResourceStsTokenRequestBody {
        this['source_identity'] = sourceIdentity;
        return this;
    }
    public set sourceIdentity(sourceIdentity: string  | undefined) {
        this['source_identity'] = sourceIdentity;
    }
    public get sourceIdentity(): string | undefined {
        return this['source_identity'];
    }
    public withTags(tags: Array<StsTag>): GetResourceStsTokenRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withTransitiveTagKeys(transitiveTagKeys: Array<string>): GetResourceStsTokenRequestBody {
        this['transitive_tag_keys'] = transitiveTagKeys;
        return this;
    }
    public set transitiveTagKeys(transitiveTagKeys: Array<string>  | undefined) {
        this['transitive_tag_keys'] = transitiveTagKeys;
    }
    public get transitiveTagKeys(): Array<string> | undefined {
        return this['transitive_tag_keys'];
    }
}