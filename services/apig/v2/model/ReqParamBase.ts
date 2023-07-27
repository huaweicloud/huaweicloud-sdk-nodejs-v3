

export class ReqParamBase {
    public name?: string;
    public type?: ReqParamBaseTypeEnum | string;
    public location?: ReqParamBaseLocationEnum | string;
    private 'default_value'?: string;
    private 'sample_value'?: string;
    public required?: ReqParamBaseRequiredEnum | number;
    private 'valid_enable'?: ReqParamBaseValidEnableEnum | number;
    public remark?: string;
    public enumerations?: string;
    private 'min_num'?: number;
    private 'max_num'?: number;
    private 'min_size'?: number;
    private 'max_size'?: number;
    public regular?: string;
    private 'json_schema'?: string;
    private 'pass_through'?: ReqParamBasePassThroughEnum | number;
    public constructor(name?: string, type?: string, location?: string) { 
        this['name'] = name;
        this['type'] = type;
        this['location'] = location;
    }
    public withName(name: string): ReqParamBase {
        this['name'] = name;
        return this;
    }
    public withType(type: ReqParamBaseTypeEnum | string): ReqParamBase {
        this['type'] = type;
        return this;
    }
    public withLocation(location: ReqParamBaseLocationEnum | string): ReqParamBase {
        this['location'] = location;
        return this;
    }
    public withDefaultValue(defaultValue: string): ReqParamBase {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withSampleValue(sampleValue: string): ReqParamBase {
        this['sample_value'] = sampleValue;
        return this;
    }
    public set sampleValue(sampleValue: string  | undefined) {
        this['sample_value'] = sampleValue;
    }
    public get sampleValue(): string | undefined {
        return this['sample_value'];
    }
    public withRequired(required: ReqParamBaseRequiredEnum | number): ReqParamBase {
        this['required'] = required;
        return this;
    }
    public withValidEnable(validEnable: ReqParamBaseValidEnableEnum | number): ReqParamBase {
        this['valid_enable'] = validEnable;
        return this;
    }
    public set validEnable(validEnable: ReqParamBaseValidEnableEnum | number  | undefined) {
        this['valid_enable'] = validEnable;
    }
    public get validEnable(): ReqParamBaseValidEnableEnum | number | undefined {
        return this['valid_enable'];
    }
    public withRemark(remark: string): ReqParamBase {
        this['remark'] = remark;
        return this;
    }
    public withEnumerations(enumerations: string): ReqParamBase {
        this['enumerations'] = enumerations;
        return this;
    }
    public withMinNum(minNum: number): ReqParamBase {
        this['min_num'] = minNum;
        return this;
    }
    public set minNum(minNum: number  | undefined) {
        this['min_num'] = minNum;
    }
    public get minNum(): number | undefined {
        return this['min_num'];
    }
    public withMaxNum(maxNum: number): ReqParamBase {
        this['max_num'] = maxNum;
        return this;
    }
    public set maxNum(maxNum: number  | undefined) {
        this['max_num'] = maxNum;
    }
    public get maxNum(): number | undefined {
        return this['max_num'];
    }
    public withMinSize(minSize: number): ReqParamBase {
        this['min_size'] = minSize;
        return this;
    }
    public set minSize(minSize: number  | undefined) {
        this['min_size'] = minSize;
    }
    public get minSize(): number | undefined {
        return this['min_size'];
    }
    public withMaxSize(maxSize: number): ReqParamBase {
        this['max_size'] = maxSize;
        return this;
    }
    public set maxSize(maxSize: number  | undefined) {
        this['max_size'] = maxSize;
    }
    public get maxSize(): number | undefined {
        return this['max_size'];
    }
    public withRegular(regular: string): ReqParamBase {
        this['regular'] = regular;
        return this;
    }
    public withJsonSchema(jsonSchema: string): ReqParamBase {
        this['json_schema'] = jsonSchema;
        return this;
    }
    public set jsonSchema(jsonSchema: string  | undefined) {
        this['json_schema'] = jsonSchema;
    }
    public get jsonSchema(): string | undefined {
        return this['json_schema'];
    }
    public withPassThrough(passThrough: ReqParamBasePassThroughEnum | number): ReqParamBase {
        this['pass_through'] = passThrough;
        return this;
    }
    public set passThrough(passThrough: ReqParamBasePassThroughEnum | number  | undefined) {
        this['pass_through'] = passThrough;
    }
    public get passThrough(): ReqParamBasePassThroughEnum | number | undefined {
        return this['pass_through'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReqParamBaseTypeEnum {
    STRING = 'STRING',
    NUMBER = 'NUMBER'
}
/**
    * @export
    * @enum {string}
    */
export enum ReqParamBaseLocationEnum {
    PATH = 'PATH',
    QUERY = 'QUERY',
    HEADER = 'HEADER'
}
/**
    * @export
    * @enum {string}
    */
export enum ReqParamBaseRequiredEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ReqParamBaseValidEnableEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ReqParamBasePassThroughEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
