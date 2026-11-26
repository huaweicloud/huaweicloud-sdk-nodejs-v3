import { AuthorizerType } from './AuthorizerType';
import { CreatedBy } from './CreatedBy';
import { Secret } from './Secret';
import { Tag } from './Tag';


export class WorkloadIdentity {
    public name?: string;
    public urn?: string;
    private 'allowed_resource_oauth2_return_urls'?: Array<string>;
    private 'authorizer_type'?: AuthorizerType;
    private 'api_key_secret'?: Secret;
    private 'created_by'?: CreatedBy;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public tags?: Array<Tag>;
    public constructor(name?: string, urn?: string, authorizerType?: AuthorizerType, createdBy?: CreatedBy, createdAt?: Date, updatedAt?: Date) { 
        this['name'] = name;
        this['urn'] = urn;
        this['authorizer_type'] = authorizerType;
        this['created_by'] = createdBy;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withName(name: string): WorkloadIdentity {
        this['name'] = name;
        return this;
    }
    public withUrn(urn: string): WorkloadIdentity {
        this['urn'] = urn;
        return this;
    }
    public withAllowedResourceOauth2ReturnUrls(allowedResourceOauth2ReturnUrls: Array<string>): WorkloadIdentity {
        this['allowed_resource_oauth2_return_urls'] = allowedResourceOauth2ReturnUrls;
        return this;
    }
    public set allowedResourceOauth2ReturnUrls(allowedResourceOauth2ReturnUrls: Array<string>  | undefined) {
        this['allowed_resource_oauth2_return_urls'] = allowedResourceOauth2ReturnUrls;
    }
    public get allowedResourceOauth2ReturnUrls(): Array<string> | undefined {
        return this['allowed_resource_oauth2_return_urls'];
    }
    public withAuthorizerType(authorizerType: AuthorizerType): WorkloadIdentity {
        this['authorizer_type'] = authorizerType;
        return this;
    }
    public set authorizerType(authorizerType: AuthorizerType  | undefined) {
        this['authorizer_type'] = authorizerType;
    }
    public get authorizerType(): AuthorizerType | undefined {
        return this['authorizer_type'];
    }
    public withApiKeySecret(apiKeySecret: Secret): WorkloadIdentity {
        this['api_key_secret'] = apiKeySecret;
        return this;
    }
    public set apiKeySecret(apiKeySecret: Secret  | undefined) {
        this['api_key_secret'] = apiKeySecret;
    }
    public get apiKeySecret(): Secret | undefined {
        return this['api_key_secret'];
    }
    public withCreatedBy(createdBy: CreatedBy): WorkloadIdentity {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: CreatedBy  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): CreatedBy | undefined {
        return this['created_by'];
    }
    public withCreatedAt(createdAt: Date): WorkloadIdentity {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): WorkloadIdentity {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withTags(tags: Array<Tag>): WorkloadIdentity {
        this['tags'] = tags;
        return this;
    }
}