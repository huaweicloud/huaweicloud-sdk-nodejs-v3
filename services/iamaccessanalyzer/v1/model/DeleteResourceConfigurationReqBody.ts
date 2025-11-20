

export class DeleteResourceConfigurationReqBody {
    public resources?: Array<string>;
    public constructor(resources?: Array<string>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<string>): DeleteResourceConfigurationReqBody {
        this['resources'] = resources;
        return this;
    }
}