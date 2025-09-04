import { UpdateAuthenticationTemplateResource } from './UpdateAuthenticationTemplateResource';


export class UpdateAuthenticationTemplateBody {
    public parameters?: object;
    public resources?: UpdateAuthenticationTemplateResource;
    public constructor() { 
    }
    public withParameters(parameters: object): UpdateAuthenticationTemplateBody {
        this['parameters'] = parameters;
        return this;
    }
    public withResources(resources: UpdateAuthenticationTemplateResource): UpdateAuthenticationTemplateBody {
        this['resources'] = resources;
        return this;
    }
}