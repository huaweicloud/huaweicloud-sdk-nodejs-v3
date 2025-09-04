import { AuthenticationTemplateResource } from './AuthenticationTemplateResource';


export class AuthenticationTemplateBody {
    public parameters?: object;
    public resources?: AuthenticationTemplateResource;
    public constructor(parameters?: object, resources?: AuthenticationTemplateResource) { 
        this['parameters'] = parameters;
        this['resources'] = resources;
    }
    public withParameters(parameters: object): AuthenticationTemplateBody {
        this['parameters'] = parameters;
        return this;
    }
    public withResources(resources: AuthenticationTemplateResource): AuthenticationTemplateBody {
        this['resources'] = resources;
        return this;
    }
}