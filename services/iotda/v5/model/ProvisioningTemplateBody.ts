import { TemplateResource } from './TemplateResource';


export class ProvisioningTemplateBody {
    public parameters?: object;
    public resources?: TemplateResource;
    public constructor(parameters?: object, resources?: TemplateResource) { 
        this['parameters'] = parameters;
        this['resources'] = resources;
    }
    public withParameters(parameters: object): ProvisioningTemplateBody {
        this['parameters'] = parameters;
        return this;
    }
    public withResources(resources: TemplateResource): ProvisioningTemplateBody {
        this['resources'] = resources;
        return this;
    }
}