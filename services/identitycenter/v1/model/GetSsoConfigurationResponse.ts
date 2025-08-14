import { SSOConfigurationDto } from './SSOConfigurationDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetSsoConfigurationResponse extends SdkResponse {
    private 'sso_configuration'?: SSOConfigurationDto;
    public constructor() { 
        super();
    }
    public withSsoConfiguration(ssoConfiguration: SSOConfigurationDto): GetSsoConfigurationResponse {
        this['sso_configuration'] = ssoConfiguration;
        return this;
    }
    public set ssoConfiguration(ssoConfiguration: SSOConfigurationDto  | undefined) {
        this['sso_configuration'] = ssoConfiguration;
    }
    public get ssoConfiguration(): SSOConfigurationDto | undefined {
        return this['sso_configuration'];
    }
}