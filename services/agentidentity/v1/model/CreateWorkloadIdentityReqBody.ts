import { AuthorizerConfiguration } from './AuthorizerConfiguration';
import { AuthorizerType } from './AuthorizerType';
import { Tag } from './Tag';


export class CreateWorkloadIdentityReqBody {
    public name?: string;
    private 'allowed_resource_oauth2_return_urls'?: Array<string>;
    private 'authorizer_type'?: AuthorizerType;
    private 'authorizer_configuration'?: AuthorizerConfiguration;
    public tags?: Array<Tag>;
    public constructor(name?: string, authorizerType?: AuthorizerType) { 
        this['name'] = name;
        this['authorizer_type'] = authorizerType;
    }
    public withName(name: string): CreateWorkloadIdentityReqBody {
        this['name'] = name;
        return this;
    }
    public withAllowedResourceOauth2ReturnUrls(allowedResourceOauth2ReturnUrls: Array<string>): CreateWorkloadIdentityReqBody {
        this['allowed_resource_oauth2_return_urls'] = allowedResourceOauth2ReturnUrls;
        return this;
    }
    public set allowedResourceOauth2ReturnUrls(allowedResourceOauth2ReturnUrls: Array<string>  | undefined) {
        this['allowed_resource_oauth2_return_urls'] = allowedResourceOauth2ReturnUrls;
    }
    public get allowedResourceOauth2ReturnUrls(): Array<string> | undefined {
        return this['allowed_resource_oauth2_return_urls'];
    }
    public withAuthorizerType(authorizerType: AuthorizerType): CreateWorkloadIdentityReqBody {
        this['authorizer_type'] = authorizerType;
        return this;
    }
    public set authorizerType(authorizerType: AuthorizerType  | undefined) {
        this['authorizer_type'] = authorizerType;
    }
    public get authorizerType(): AuthorizerType | undefined {
        return this['authorizer_type'];
    }
    public withAuthorizerConfiguration(authorizerConfiguration: AuthorizerConfiguration): CreateWorkloadIdentityReqBody {
        this['authorizer_configuration'] = authorizerConfiguration;
        return this;
    }
    public set authorizerConfiguration(authorizerConfiguration: AuthorizerConfiguration  | undefined) {
        this['authorizer_configuration'] = authorizerConfiguration;
    }
    public get authorizerConfiguration(): AuthorizerConfiguration | undefined {
        return this['authorizer_configuration'];
    }
    public withTags(tags: Array<Tag>): CreateWorkloadIdentityReqBody {
        this['tags'] = tags;
        return this;
    }
}