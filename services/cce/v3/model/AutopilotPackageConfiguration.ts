import { AutopilotConfigurationItem } from './AutopilotConfigurationItem';


export class AutopilotPackageConfiguration {
    public name?: string;
    public configurations?: Array<AutopilotConfigurationItem>;
    public constructor() { 
    }
    public withName(name: string): AutopilotPackageConfiguration {
        this['name'] = name;
        return this;
    }
    public withConfigurations(configurations: Array<AutopilotConfigurationItem>): AutopilotPackageConfiguration {
        this['configurations'] = configurations;
        return this;
    }
}