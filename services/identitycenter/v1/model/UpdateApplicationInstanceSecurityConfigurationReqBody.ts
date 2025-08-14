import { SecurityConfigDto } from './SecurityConfigDto';


export class UpdateApplicationInstanceSecurityConfigurationReqBody {
    private 'security_config'?: SecurityConfigDto;
    public constructor(securityConfig?: SecurityConfigDto) { 
        this['security_config'] = securityConfig;
    }
    public withSecurityConfig(securityConfig: SecurityConfigDto): UpdateApplicationInstanceSecurityConfigurationReqBody {
        this['security_config'] = securityConfig;
        return this;
    }
    public set securityConfig(securityConfig: SecurityConfigDto  | undefined) {
        this['security_config'] = securityConfig;
    }
    public get securityConfig(): SecurityConfigDto | undefined {
        return this['security_config'];
    }
}