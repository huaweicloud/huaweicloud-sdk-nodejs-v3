

export class UpdateProxyConfigurationItem {
    public name?: string;
    public value?: string;
    private 'elem_type'?: string;
    public constructor(name?: string, value?: string, elemType?: string) { 
        this['name'] = name;
        this['value'] = value;
        this['elem_type'] = elemType;
    }
    public withName(name: string): UpdateProxyConfigurationItem {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): UpdateProxyConfigurationItem {
        this['value'] = value;
        return this;
    }
    public withElemType(elemType: string): UpdateProxyConfigurationItem {
        this['elem_type'] = elemType;
        return this;
    }
    public set elemType(elemType: string  | undefined) {
        this['elem_type'] = elemType;
    }
    public get elemType(): string | undefined {
        return this['elem_type'];
    }
}