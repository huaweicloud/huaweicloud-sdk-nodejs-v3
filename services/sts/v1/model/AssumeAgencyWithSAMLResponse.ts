import { AssumedAgencyWithFederationDto } from './AssumedAgencyWithFederationDto';
import { CredentialsDto } from './CredentialsDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssumeAgencyWithSAMLResponse extends SdkResponse {
    private 'source_identity'?: string;
    private 'assumed_agency'?: AssumedAgencyWithFederationDto;
    public credentials?: CredentialsDto;
    public audience?: string;
    public issuer?: string;
    private 'name_qualifier'?: string;
    public subject?: string;
    private 'subject_type'?: string;
    public constructor() { 
        super();
    }
    public withSourceIdentity(sourceIdentity: string): AssumeAgencyWithSAMLResponse {
        this['source_identity'] = sourceIdentity;
        return this;
    }
    public set sourceIdentity(sourceIdentity: string  | undefined) {
        this['source_identity'] = sourceIdentity;
    }
    public get sourceIdentity(): string | undefined {
        return this['source_identity'];
    }
    public withAssumedAgency(assumedAgency: AssumedAgencyWithFederationDto): AssumeAgencyWithSAMLResponse {
        this['assumed_agency'] = assumedAgency;
        return this;
    }
    public set assumedAgency(assumedAgency: AssumedAgencyWithFederationDto  | undefined) {
        this['assumed_agency'] = assumedAgency;
    }
    public get assumedAgency(): AssumedAgencyWithFederationDto | undefined {
        return this['assumed_agency'];
    }
    public withCredentials(credentials: CredentialsDto): AssumeAgencyWithSAMLResponse {
        this['credentials'] = credentials;
        return this;
    }
    public withAudience(audience: string): AssumeAgencyWithSAMLResponse {
        this['audience'] = audience;
        return this;
    }
    public withIssuer(issuer: string): AssumeAgencyWithSAMLResponse {
        this['issuer'] = issuer;
        return this;
    }
    public withNameQualifier(nameQualifier: string): AssumeAgencyWithSAMLResponse {
        this['name_qualifier'] = nameQualifier;
        return this;
    }
    public set nameQualifier(nameQualifier: string  | undefined) {
        this['name_qualifier'] = nameQualifier;
    }
    public get nameQualifier(): string | undefined {
        return this['name_qualifier'];
    }
    public withSubject(subject: string): AssumeAgencyWithSAMLResponse {
        this['subject'] = subject;
        return this;
    }
    public withSubjectType(subjectType: string): AssumeAgencyWithSAMLResponse {
        this['subject_type'] = subjectType;
        return this;
    }
    public set subjectType(subjectType: string  | undefined) {
        this['subject_type'] = subjectType;
    }
    public get subjectType(): string | undefined {
        return this['subject_type'];
    }
}