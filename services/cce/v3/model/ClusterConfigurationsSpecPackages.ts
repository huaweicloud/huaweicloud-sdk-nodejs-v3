import { ConfigurationItem } from './ConfigurationItem';


export class ClusterConfigurationsSpecPackages {
    public name?: string;
    public configurations?: Array<ConfigurationItem>;
    public constructor() { 
    }
    public withName(name: string): ClusterConfigurationsSpecPackages {
        this['name'] = name;
        return this;
    }
    public withConfigurations(configurations: Array<ConfigurationItem>): ClusterConfigurationsSpecPackages {
        this['configurations'] = configurations;
        return this;
    }
}