import { Tag } from './Tag';


export class StsCredentialProvider {
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
    public withName(name: string): StsCredentialProvider {
        this['name'] = name;
        return this;
    }
    public withUrn(urn: string): StsCredentialProvider {
        this['urn'] = urn;
        return this;
    }
    public withAgencyUrn(agencyUrn: string): StsCredentialProvider {
        this['agency_urn'] = agencyUrn;
        return this;
    }
    public set agencyUrn(agencyUrn: string  | undefined) {
        this['agency_urn'] = agencyUrn;
    }
    public get agencyUrn(): string | undefined {
        return this['agency_urn'];
    }
    public withCreatedAt(createdAt: Date): StsCredentialProvider {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): StsCredentialProvider {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withTags(tags: Array<Tag>): StsCredentialProvider {
        this['tags'] = tags;
        return this;
    }
}