import { ServiceProviderConfigDto } from './ServiceProviderConfigDto';


export class UpdateApplicationInstanceServiceProviderConfigurationReqBody {
    private 'service_provider_config'?: ServiceProviderConfigDto;
    public constructor(serviceProviderConfig?: ServiceProviderConfigDto) { 
        this['service_provider_config'] = serviceProviderConfig;
    }
    public withServiceProviderConfig(serviceProviderConfig: ServiceProviderConfigDto): UpdateApplicationInstanceServiceProviderConfigurationReqBody {
        this['service_provider_config'] = serviceProviderConfig;
        return this;
    }
    public set serviceProviderConfig(serviceProviderConfig: ServiceProviderConfigDto  | undefined) {
        this['service_provider_config'] = serviceProviderConfig;
    }
    public get serviceProviderConfig(): ServiceProviderConfigDto | undefined {
        return this['service_provider_config'];
    }
}