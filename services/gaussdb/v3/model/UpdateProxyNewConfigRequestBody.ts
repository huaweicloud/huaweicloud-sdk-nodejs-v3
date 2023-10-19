import { UpdateProxyConfigurationItem } from './UpdateProxyConfigurationItem';


export class UpdateProxyNewConfigRequestBody {
    public configurations?: Array<UpdateProxyConfigurationItem>;
    public constructor(configurations?: Array<UpdateProxyConfigurationItem>) { 
        this['configurations'] = configurations;
    }
    public withConfigurations(configurations: Array<UpdateProxyConfigurationItem>): UpdateProxyNewConfigRequestBody {
        this['configurations'] = configurations;
        return this;
    }
}