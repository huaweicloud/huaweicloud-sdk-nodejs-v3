import { AuthorizerConfiguration } from './AuthorizerConfiguration';
import { Tag } from './Tag';


export class UpdateWorkloadIdentityReqBody {
    private 'allowed_resource_oauth2_return_urls'?: Array<string>;
    private 'authorizer_configuration'?: AuthorizerConfiguration;
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withAllowedResourceOauth2ReturnUrls(allowedResourceOauth2ReturnUrls: Array<string>): UpdateWorkloadIdentityReqBody {
        this['allowed_resource_oauth2_return_urls'] = allowedResourceOauth2ReturnUrls;
        return this;
    }
    public set allowedResourceOauth2ReturnUrls(allowedResourceOauth2ReturnUrls: Array<string>  | undefined) {
        this['allowed_resource_oauth2_return_urls'] = allowedResourceOauth2ReturnUrls;
    }
    public get allowedResourceOauth2ReturnUrls(): Array<string> | undefined {
        return this['allowed_resource_oauth2_return_urls'];
    }
    public withAuthorizerConfiguration(authorizerConfiguration: AuthorizerConfiguration): UpdateWorkloadIdentityReqBody {
        this['authorizer_configuration'] = authorizerConfiguration;
        return this;
    }
    public set authorizerConfiguration(authorizerConfiguration: AuthorizerConfiguration  | undefined) {
        this['authorizer_configuration'] = authorizerConfiguration;
    }
    public get authorizerConfiguration(): AuthorizerConfiguration | undefined {
        return this['authorizer_configuration'];
    }
    public withTags(tags: Array<Tag>): UpdateWorkloadIdentityReqBody {
        this['tags'] = tags;
        return this;
    }
}