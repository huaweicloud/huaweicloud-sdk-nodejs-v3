import { ReqParamBase } from './ReqParamBase';


export class ReqParam {
    public name?: string;
    public type?: ReqParamTypeEnum | string;
    public location?: ReqParamLocationEnum | string;
    private 'default_value'?: string;
    private 'sample_value'?: string;
    public required?: ReqParamRequiredEnum | number;
    private 'valid_enable'?: ReqParamValidEnableEnum | number;
    public remark?: string;
    public enumerations?: string;
    private 'min_num'?: number;
    private 'max_num'?: number;
    private 'min_size'?: number;
    private 'max_size'?: number;
    public regular?: string;
    private 'json_schema'?: string;
    private 'pass_through'?: ReqParamPassThroughEnum | number;
    public id?: string;
    public constructor(name?: string, type?: string, location?: string) { 
        this['name'] = name;
        this['type'] = type;
        this['location'] = location;
    }
    public withName(name: string): ReqParam {
        this['name'] = name;
        return this;
    }
    public withType(type: ReqParamTypeEnum | string): ReqParam {
        this['type'] = type;
        return this;
    }
    public withLocation(location: ReqParamLocationEnum | string): ReqParam {
        this['location'] = location;
        return this;
    }
    public withDefaultValue(defaultValue: string): ReqParam {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withSampleValue(sampleValue: string): ReqParam {
        this['sample_value'] = sampleValue;
        return this;
    }
    public set sampleValue(sampleValue: string  | undefined) {
        this['sample_value'] = sampleValue;
    }
    public get sampleValue(): string | undefined {
        return this['sample_value'];
    }
    public withRequired(required: ReqParamRequiredEnum | number): ReqParam {
        this['required'] = required;
        return this;
    }
    public withValidEnable(validEnable: ReqParamValidEnableEnum | number): ReqParam {
        this['valid_enable'] = validEnable;
        return this;
    }
    public set validEnable(validEnable: ReqParamValidEnableEnum | number  | undefined) {
        this['valid_enable'] = validEnable;
    }
    public get validEnable(): ReqParamValidEnableEnum | number | undefined {
        return this['valid_enable'];
    }
    public withRemark(remark: string): ReqParam {
        this['remark'] = remark;
        return this;
    }
    public withEnumerations(enumerations: string): ReqParam {
        this['enumerations'] = enumerations;
        return this;
    }
    public withMinNum(minNum: number): ReqParam {
        this['min_num'] = minNum;
        return this;
    }
    public set minNum(minNum: number  | undefined) {
        this['min_num'] = minNum;
    }
    public get minNum(): number | undefined {
        return this['min_num'];
    }
    public withMaxNum(maxNum: number): ReqParam {
        this['max_num'] = maxNum;
        return this;
    }
    public set maxNum(maxNum: number  | undefined) {
        this['max_num'] = maxNum;
    }
    public get maxNum(): number | undefined {
        return this['max_num'];
    }
    public withMinSize(minSize: number): ReqParam {
        this['min_size'] = minSize;
        return this;
    }
    public set minSize(minSize: number  | undefined) {
        this['min_size'] = minSize;
    }
    public get minSize(): number | undefined {
        return this['min_size'];
    }
    public withMaxSize(maxSize: number): ReqParam {
        this['max_size'] = maxSize;
        return this;
    }
    public set maxSize(maxSize: number  | undefined) {
        this['max_size'] = maxSize;
    }
    public get maxSize(): number | undefined {
        return this['max_size'];
    }
    public withRegular(regular: string): ReqParam {
        this['regular'] = regular;
        return this;
    }
    public withJsonSchema(jsonSchema: string): ReqParam {
        this['json_schema'] = jsonSchema;
        return this;
    }
    public set jsonSchema(jsonSchema: string  | undefined) {
        this['json_schema'] = jsonSchema;
    }
    public get jsonSchema(): string | undefined {
        return this['json_schema'];
    }
    public withPassThrough(passThrough: ReqParamPassThroughEnum | number): ReqParam {
        this['pass_through'] = passThrough;
        return this;
    }
    public set passThrough(passThrough: ReqParamPassThroughEnum | number  | undefined) {
        this['pass_through'] = passThrough;
    }
    public get passThrough(): ReqParamPassThroughEnum | number | undefined {
        return this['pass_through'];
    }
    public withId(id: string): ReqParam {
        this['id'] = id;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReqParamTypeEnum {
    STRING = 'STRING',
    NUMBER = 'NUMBER'
}
/**
    * @export
    * @enum {string}
    */
export enum ReqParamLocationEnum {
    PATH = 'PATH',
    QUERY = 'QUERY',
    HEADER = 'HEADER'
}
/**
    * @export
    * @enum {string}
    */
export enum ReqParamRequiredEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ReqParamValidEnableEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ReqParamPassThroughEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
