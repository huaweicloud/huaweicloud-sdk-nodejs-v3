

export class ComponentExternalDatasource {
    public name?: string;
    public types?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): ComponentExternalDatasource {
        this['name'] = name;
        return this;
    }
    public withTypes(types: Array<string>): ComponentExternalDatasource {
        this['types'] = types;
        return this;
    }
}