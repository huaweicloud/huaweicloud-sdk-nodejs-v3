import { TagDto } from './TagDto';


export class AssumeAgencyReqBody {
    private 'duration_seconds'?: number;
    private 'external_id'?: string;
    public policy?: string;
    private 'policy_ids'?: Array<string>;
    private 'agency_urn'?: string;
    private 'agency_session_name'?: string;
    private 'serial_number'?: string;
    private 'token_code'?: string;
    private 'source_identity'?: string;
    public tags?: Array<TagDto>;
    private 'transitive_tag_keys'?: Array<string>;
    public constructor(agencyUrn?: string, agencySessionName?: string) { 
        this['agency_urn'] = agencyUrn;
        this['agency_session_name'] = agencySessionName;
    }
    public withDurationSeconds(durationSeconds: number): AssumeAgencyReqBody {
        this['duration_seconds'] = durationSeconds;
        return this;
    }
    public set durationSeconds(durationSeconds: number  | undefined) {
        this['duration_seconds'] = durationSeconds;
    }
    public get durationSeconds(): number | undefined {
        return this['duration_seconds'];
    }
    public withExternalId(externalId: string): AssumeAgencyReqBody {
        this['external_id'] = externalId;
        return this;
    }
    public set externalId(externalId: string  | undefined) {
        this['external_id'] = externalId;
    }
    public get externalId(): string | undefined {
        return this['external_id'];
    }
    public withPolicy(policy: string): AssumeAgencyReqBody {
        this['policy'] = policy;
        return this;
    }
    public withPolicyIds(policyIds: Array<string>): AssumeAgencyReqBody {
        this['policy_ids'] = policyIds;
        return this;
    }
    public set policyIds(policyIds: Array<string>  | undefined) {
        this['policy_ids'] = policyIds;
    }
    public get policyIds(): Array<string> | undefined {
        return this['policy_ids'];
    }
    public withAgencyUrn(agencyUrn: string): AssumeAgencyReqBody {
        this['agency_urn'] = agencyUrn;
        return this;
    }
    public set agencyUrn(agencyUrn: string  | undefined) {
        this['agency_urn'] = agencyUrn;
    }
    public get agencyUrn(): string | undefined {
        return this['agency_urn'];
    }
    public withAgencySessionName(agencySessionName: string): AssumeAgencyReqBody {
        this['agency_session_name'] = agencySessionName;
        return this;
    }
    public set agencySessionName(agencySessionName: string  | undefined) {
        this['agency_session_name'] = agencySessionName;
    }
    public get agencySessionName(): string | undefined {
        return this['agency_session_name'];
    }
    public withSerialNumber(serialNumber: string): AssumeAgencyReqBody {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withTokenCode(tokenCode: string): AssumeAgencyReqBody {
        this['token_code'] = tokenCode;
        return this;
    }
    public set tokenCode(tokenCode: string  | undefined) {
        this['token_code'] = tokenCode;
    }
    public get tokenCode(): string | undefined {
        return this['token_code'];
    }
    public withSourceIdentity(sourceIdentity: string): AssumeAgencyReqBody {
        this['source_identity'] = sourceIdentity;
        return this;
    }
    public set sourceIdentity(sourceIdentity: string  | undefined) {
        this['source_identity'] = sourceIdentity;
    }
    public get sourceIdentity(): string | undefined {
        return this['source_identity'];
    }
    public withTags(tags: Array<TagDto>): AssumeAgencyReqBody {
        this['tags'] = tags;
        return this;
    }
    public withTransitiveTagKeys(transitiveTagKeys: Array<string>): AssumeAgencyReqBody {
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