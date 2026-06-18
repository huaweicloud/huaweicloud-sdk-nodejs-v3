import { AssumedAgencyWithFederationDto } from './AssumedAgencyWithFederationDto';
import { CredentialsDto } from './CredentialsDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssumeAgencyWithOIDCResponse extends SdkResponse {
    private 'source_identity'?: string;
    private 'assumed_agency'?: AssumedAgencyWithFederationDto;
    public credentials?: CredentialsDto;
    public audience?: string;
    public provider?: string;
    private 'subject_from_id_token'?: string;
    public constructor() { 
        super();
    }
    public withSourceIdentity(sourceIdentity: string): AssumeAgencyWithOIDCResponse {
        this['source_identity'] = sourceIdentity;
        return this;
    }
    public set sourceIdentity(sourceIdentity: string  | undefined) {
        this['source_identity'] = sourceIdentity;
    }
    public get sourceIdentity(): string | undefined {
        return this['source_identity'];
    }
    public withAssumedAgency(assumedAgency: AssumedAgencyWithFederationDto): AssumeAgencyWithOIDCResponse {
        this['assumed_agency'] = assumedAgency;
        return this;
    }
    public set assumedAgency(assumedAgency: AssumedAgencyWithFederationDto  | undefined) {
        this['assumed_agency'] = assumedAgency;
    }
    public get assumedAgency(): AssumedAgencyWithFederationDto | undefined {
        return this['assumed_agency'];
    }
    public withCredentials(credentials: CredentialsDto): AssumeAgencyWithOIDCResponse {
        this['credentials'] = credentials;
        return this;
    }
    public withAudience(audience: string): AssumeAgencyWithOIDCResponse {
        this['audience'] = audience;
        return this;
    }
    public withProvider(provider: string): AssumeAgencyWithOIDCResponse {
        this['provider'] = provider;
        return this;
    }
    public withSubjectFromIdToken(subjectFromIdToken: string): AssumeAgencyWithOIDCResponse {
        this['subject_from_id_token'] = subjectFromIdToken;
        return this;
    }
    public set subjectFromIdToken(subjectFromIdToken: string  | undefined) {
        this['subject_from_id_token'] = subjectFromIdToken;
    }
    public get subjectFromIdToken(): string | undefined {
        return this['subject_from_id_token'];
    }
}