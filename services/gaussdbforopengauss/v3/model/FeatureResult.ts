

export class FeatureResult {
    public name?: string;
    public status?: string;
    public description?: string;
    public type?: FeatureResultTypeEnum | string;
    public value?: string;
    public range?: string;
    private 'range_description'?: string;
    public constructor() { 
    }
    public withName(name: string): FeatureResult {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): FeatureResult {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): FeatureResult {
        this['description'] = description;
        return this;
    }
    public withType(type: FeatureResultTypeEnum | string): FeatureResult {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): FeatureResult {
        this['value'] = value;
        return this;
    }
    public withRange(range: string): FeatureResult {
        this['range'] = range;
        return this;
    }
    public withRangeDescription(rangeDescription: string): FeatureResult {
        this['range_description'] = rangeDescription;
        return this;
    }
    public set rangeDescription(rangeDescription: string  | undefined) {
        this['range_description'] = rangeDescription;
    }
    public get rangeDescription(): string | undefined {
        return this['range_description'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FeatureResultTypeEnum {
    INTEGER = 'integer',
    STRING = 'string',
    BOOLEAN = 'boolean'
}
