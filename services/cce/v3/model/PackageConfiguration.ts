import { ConfigurationItem } from './ConfigurationItem';


export class PackageConfiguration {
    public name?: string;
    public configurations?: Array<ConfigurationItem>;
    public constructor() { 
    }
    public withName(name: string): PackageConfiguration {
        this['name'] = name;
        return this;
    }
    public withConfigurations(configurations: Array<ConfigurationItem>): PackageConfiguration {
        this['configurations'] = configurations;
        return this;
    }
}