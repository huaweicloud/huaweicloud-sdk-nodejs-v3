import { SSOConfigurationDto } from './SSOConfigurationDto';


export class UpdateSsoConfigurationReqBody {
    private 'sso_configuration'?: SSOConfigurationDto;
    private 'configuration_type'?: UpdateSsoConfigurationReqBodyConfigurationTypeEnum | string;
    public constructor(ssoConfiguration?: SSOConfigurationDto, configurationType?: string) { 
        this['sso_configuration'] = ssoConfiguration;
        this['configuration_type'] = configurationType;
    }
    public withSsoConfiguration(ssoConfiguration: SSOConfigurationDto): UpdateSsoConfigurationReqBody {
        this['sso_configuration'] = ssoConfiguration;
        return this;
    }
    public set ssoConfiguration(ssoConfiguration: SSOConfigurationDto  | undefined) {
        this['sso_configuration'] = ssoConfiguration;
    }
    public get ssoConfiguration(): SSOConfigurationDto | undefined {
        return this['sso_configuration'];
    }
    public withConfigurationType(configurationType: UpdateSsoConfigurationReqBodyConfigurationTypeEnum | string): UpdateSsoConfigurationReqBody {
        this['configuration_type'] = configurationType;
        return this;
    }
    public set configurationType(configurationType: UpdateSsoConfigurationReqBodyConfigurationTypeEnum | string  | undefined) {
        this['configuration_type'] = configurationType;
    }
    public get configurationType(): UpdateSsoConfigurationReqBodyConfigurationTypeEnum | string | undefined {
        return this['configuration_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateSsoConfigurationReqBodyConfigurationTypeEnum {
    APP_AUTHENTICATION_CONFIGURATION = 'APP_AUTHENTICATION_CONFIGURATION',
    SESSION = 'SESSION'
}
