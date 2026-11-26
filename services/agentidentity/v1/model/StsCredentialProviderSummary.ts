import { Tag } from './Tag';


export class StsCredentialProviderSummary {
    public name?: string;
    public urn?: string;
    private 'agency_urn'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public tags?: Array<Tag>;
    public constructor(name?: string, urn?: string, agencyUrn?: string, createdAt?: Date, updatedAt?: Date) { 
        this['name'] = name;
        this['urn'] = urn;
        this['agency_urn'] = agencyUrn;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withName(name: string): StsCredentialProviderSummary {
        this['name'] = name;
        return this;
    }
    public withUrn(urn: string): StsCredentialProviderSummary {
        this['urn'] = urn;
        return this;
    }
    public withAgencyUrn(agencyUrn: string): StsCredentialProviderSummary {
        this['agency_urn'] = agencyUrn;
        return this;
    }
    public set agencyUrn(agencyUrn: string  | undefined) {
        this['agency_urn'] = agencyUrn;
    }
    public get agencyUrn(): string | undefined {
        return this['agency_urn'];
    }
    public withCreatedAt(createdAt: Date): StsCredentialProviderSummary {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): StsCredentialProviderSummary {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withTags(tags: Array<Tag>): StsCredentialProviderSummary {
        this['tags'] = tags;
        return this;
    }
}