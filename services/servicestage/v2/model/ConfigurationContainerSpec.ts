import { ComponentContainerParameter } from './ComponentContainerParameter';


export class ConfigurationContainerSpec {
    public containers?: Array<ComponentContainerParameter>;
    public type?: string;
    public constructor() { 
    }
    public withContainers(containers: Array<ComponentContainerParameter>): ConfigurationContainerSpec {
        this['containers'] = containers;
        return this;
    }
    public withType(type: string): ConfigurationContainerSpec {
        this['type'] = type;
        return this;
    }
}