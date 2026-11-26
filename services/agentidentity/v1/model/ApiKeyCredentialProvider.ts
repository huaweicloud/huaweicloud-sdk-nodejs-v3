import { Secret } from './Secret';
import { Tag } from './Tag';


export class ApiKeyCredentialProvider {
    public name?: string;
    public urn?: string;
    private 'api_key_secret'?: Secret;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public tags?: Array<Tag>;
    public constructor(name?: string, urn?: string, apiKeySecret?: Secret, createdAt?: Date, updatedAt?: Date) { 
        this['name'] = name;
        this['urn'] = urn;
        this['api_key_secret'] = apiKeySecret;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withName(name: string): ApiKeyCredentialProvider {
        this['name'] = name;
        return this;
    }
    public withUrn(urn: string): ApiKeyCredentialProvider {
        this['urn'] = urn;
        return this;
    }
    public withApiKeySecret(apiKeySecret: Secret): ApiKeyCredentialProvider {
        this['api_key_secret'] = apiKeySecret;
        return this;
    }
    public set apiKeySecret(apiKeySecret: Secret  | undefined) {
        this['api_key_secret'] = apiKeySecret;
    }
    public get apiKeySecret(): Secret | undefined {
        return this['api_key_secret'];
    }
    public withCreatedAt(createdAt: Date): ApiKeyCredentialProvider {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ApiKeyCredentialProvider {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withTags(tags: Array<Tag>): ApiKeyCredentialProvider {
        this['tags'] = tags;
        return this;
    }
}