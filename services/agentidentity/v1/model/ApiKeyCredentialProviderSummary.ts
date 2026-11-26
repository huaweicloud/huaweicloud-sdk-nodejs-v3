import { Tag } from './Tag';


export class ApiKeyCredentialProviderSummary {
    public name?: string;
    public urn?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public tags?: Array<Tag>;
    public constructor(name?: string, urn?: string, createdAt?: Date, updatedAt?: Date) { 
        this['name'] = name;
        this['urn'] = urn;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withName(name: string): ApiKeyCredentialProviderSummary {
        this['name'] = name;
        return this;
    }
    public withUrn(urn: string): ApiKeyCredentialProviderSummary {
        this['urn'] = urn;
        return this;
    }
    public withCreatedAt(createdAt: Date): ApiKeyCredentialProviderSummary {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ApiKeyCredentialProviderSummary {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withTags(tags: Array<Tag>): ApiKeyCredentialProviderSummary {
        this['tags'] = tags;
        return this;
    }
}