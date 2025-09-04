

export class UpdateModuleShadowsRequestBody {
    public properties?: object;
    public constructor() { 
    }
    public withProperties(properties: object): UpdateModuleShadowsRequestBody {
        this['properties'] = properties;
        return this;
    }
}