import { ResourceConfiguration } from './ResourceConfiguration';


export class CreateResourceConfigurationsReqBody {
    private 'resource_configurations'?: Array<ResourceConfiguration>;
    public constructor(resourceConfigurations?: Array<ResourceConfiguration>) { 
        this['resource_configurations'] = resourceConfigurations;
    }
    public withResourceConfigurations(resourceConfigurations: Array<ResourceConfiguration>): CreateResourceConfigurationsReqBody {
        this['resource_configurations'] = resourceConfigurations;
        return this;
    }
    public set resourceConfigurations(resourceConfigurations: Array<ResourceConfiguration>  | undefined) {
        this['resource_configurations'] = resourceConfigurations;
    }
    public get resourceConfigurations(): Array<ResourceConfiguration> | undefined {
        return this['resource_configurations'];
    }
}