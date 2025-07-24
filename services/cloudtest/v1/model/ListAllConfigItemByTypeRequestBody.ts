

export class ListAllConfigItemByTypeRequestBody {
    public configType?: string;
    public types?: Array<string>;
    public constructor() { 
    }
    public withConfigType(configType: string): ListAllConfigItemByTypeRequestBody {
        this['configType'] = configType;
        return this;
    }
    public withTypes(types: Array<string>): ListAllConfigItemByTypeRequestBody {
        this['types'] = types;
        return this;
    }
}