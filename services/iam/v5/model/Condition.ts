import { Description } from './Description';


export class Condition {
    public key?: string;
    private 'value_type'?: ConditionValueTypeEnum | string;
    private 'multi_valued'?: boolean;
    public description?: Description;
    public constructor(key?: string, valueType?: string, multiValued?: boolean, description?: Description) { 
        this['key'] = key;
        this['value_type'] = valueType;
        this['multi_valued'] = multiValued;
        this['description'] = description;
    }
    public withKey(key: string): Condition {
        this['key'] = key;
        return this;
    }
    public withValueType(valueType: ConditionValueTypeEnum | string): Condition {
        this['value_type'] = valueType;
        return this;
    }
    public set valueType(valueType: ConditionValueTypeEnum | string  | undefined) {
        this['value_type'] = valueType;
    }
    public get valueType(): ConditionValueTypeEnum | string | undefined {
        return this['value_type'];
    }
    public withMultiValued(multiValued: boolean): Condition {
        this['multi_valued'] = multiValued;
        return this;
    }
    public set multiValued(multiValued: boolean  | undefined) {
        this['multi_valued'] = multiValued;
    }
    public get multiValued(): boolean | undefined {
        return this['multi_valued'];
    }
    public withDescription(description: Description): Condition {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConditionValueTypeEnum {
    STRING = 'string',
    NUMERIC = 'numeric',
    DATE = 'date',
    BOOLEAN = 'boolean',
    IP_ADDRESS = 'ip_address'
}
