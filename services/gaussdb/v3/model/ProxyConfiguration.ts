

export class ProxyConfiguration {
    public name?: string;
    private 'data_type'?: string;
    private 'elem_type'?: string;
    private 'value_range'?: string;
    public value?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): ProxyConfiguration {
        this['name'] = name;
        return this;
    }
    public withDataType(dataType: string): ProxyConfiguration {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withElemType(elemType: string): ProxyConfiguration {
        this['elem_type'] = elemType;
        return this;
    }
    public set elemType(elemType: string  | undefined) {
        this['elem_type'] = elemType;
    }
    public get elemType(): string | undefined {
        return this['elem_type'];
    }
    public withValueRange(valueRange: string): ProxyConfiguration {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string  | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange(): string | undefined {
        return this['value_range'];
    }
    public withValue(value: string): ProxyConfiguration {
        this['value'] = value;
        return this;
    }
    public withDescription(description: string): ProxyConfiguration {
        this['description'] = description;
        return this;
    }
}