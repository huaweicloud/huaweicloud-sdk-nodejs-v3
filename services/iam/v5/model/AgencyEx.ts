import { Tag } from './Tag';


export class AgencyEx {
    public urn?: string;
    private 'trust_policy'?: string;
    private 'created_at'?: Date;
    public description?: string;
    private 'max_session_duration'?: number;
    public path?: string;
    private 'agency_id'?: string;
    private 'agency_name'?: string;
    private 'trust_domain_id'?: string;
    private 'trust_domain_name'?: string;
    public tags?: Array<Tag>;
    public constructor(urn?: string, createdAt?: Date, maxSessionDuration?: number, path?: string, agencyId?: string, agencyName?: string, tags?: Array<Tag>) { 
        this['urn'] = urn;
        this['created_at'] = createdAt;
        this['max_session_duration'] = maxSessionDuration;
        this['path'] = path;
        this['agency_id'] = agencyId;
        this['agency_name'] = agencyName;
        this['tags'] = tags;
    }
    public withUrn(urn: string): AgencyEx {
        this['urn'] = urn;
        return this;
    }
    public withTrustPolicy(trustPolicy: string): AgencyEx {
        this['trust_policy'] = trustPolicy;
        return this;
    }
    public set trustPolicy(trustPolicy: string  | undefined) {
        this['trust_policy'] = trustPolicy;
    }
    public get trustPolicy(): string | undefined {
        return this['trust_policy'];
    }
    public withCreatedAt(createdAt: Date): AgencyEx {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withDescription(description: string): AgencyEx {
        this['description'] = description;
        return this;
    }
    public withMaxSessionDuration(maxSessionDuration: number): AgencyEx {
        this['max_session_duration'] = maxSessionDuration;
        return this;
    }
    public set maxSessionDuration(maxSessionDuration: number  | undefined) {
        this['max_session_duration'] = maxSessionDuration;
    }
    public get maxSessionDuration(): number | undefined {
        return this['max_session_duration'];
    }
    public withPath(path: string): AgencyEx {
        this['path'] = path;
        return this;
    }
    public withAgencyId(agencyId: string): AgencyEx {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
    public withAgencyName(agencyName: string): AgencyEx {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withTrustDomainId(trustDomainId: string): AgencyEx {
        this['trust_domain_id'] = trustDomainId;
        return this;
    }
    public set trustDomainId(trustDomainId: string  | undefined) {
        this['trust_domain_id'] = trustDomainId;
    }
    public get trustDomainId(): string | undefined {
        return this['trust_domain_id'];
    }
    public withTrustDomainName(trustDomainName: string): AgencyEx {
        this['trust_domain_name'] = trustDomainName;
        return this;
    }
    public set trustDomainName(trustDomainName: string  | undefined) {
        this['trust_domain_name'] = trustDomainName;
    }
    public get trustDomainName(): string | undefined {
        return this['trust_domain_name'];
    }
    public withTags(tags: Array<Tag>): AgencyEx {
        this['tags'] = tags;
        return this;
    }
}