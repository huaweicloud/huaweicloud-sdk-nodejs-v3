import { AwParamBasicValue } from './AwParamBasicValue';
import { Number } from './Number';
import { ValidateRule } from './ValidateRule';


export class ItemParam {
    private 'basic_value'?: AwParamBasicValue;
    public defaultValue?: string;
    private 'enum_type'?: string;
    private 'enum_type_selected'?: string;
    public format?: string;
    private 'is_big_field'?: boolean;
    public maxItems?: number;
    public maxLength?: number;
    public maximum?: Number;
    public minItems?: number;
    public minLength?: number;
    public minimum?: Number;
    public pattern?: string;
    public type?: string;
    private 'validate_rule'?: ValidateRule;
    private 'value_type'?: number;
    public xChoiceValue?: string;
    public constructor() { 
    }
    public withBasicValue(basicValue: AwParamBasicValue): ItemParam {
        this['basic_value'] = basicValue;
        return this;
    }
    public set basicValue(basicValue: AwParamBasicValue  | undefined) {
        this['basic_value'] = basicValue;
    }
    public get basicValue(): AwParamBasicValue | undefined {
        return this['basic_value'];
    }
    public withDefaultValue(defaultValue: string): ItemParam {
        this['defaultValue'] = defaultValue;
        return this;
    }
    public withEnumType(enumType: string): ItemParam {
        this['enum_type'] = enumType;
        return this;
    }
    public set enumType(enumType: string  | undefined) {
        this['enum_type'] = enumType;
    }
    public get enumType(): string | undefined {
        return this['enum_type'];
    }
    public withEnumTypeSelected(enumTypeSelected: string): ItemParam {
        this['enum_type_selected'] = enumTypeSelected;
        return this;
    }
    public set enumTypeSelected(enumTypeSelected: string  | undefined) {
        this['enum_type_selected'] = enumTypeSelected;
    }
    public get enumTypeSelected(): string | undefined {
        return this['enum_type_selected'];
    }
    public withFormat(format: string): ItemParam {
        this['format'] = format;
        return this;
    }
    public withIsBigField(isBigField: boolean): ItemParam {
        this['is_big_field'] = isBigField;
        return this;
    }
    public set isBigField(isBigField: boolean  | undefined) {
        this['is_big_field'] = isBigField;
    }
    public get isBigField(): boolean | undefined {
        return this['is_big_field'];
    }
    public withMaxItems(maxItems: number): ItemParam {
        this['maxItems'] = maxItems;
        return this;
    }
    public withMaxLength(maxLength: number): ItemParam {
        this['maxLength'] = maxLength;
        return this;
    }
    public withMaximum(maximum: Number): ItemParam {
        this['maximum'] = maximum;
        return this;
    }
    public withMinItems(minItems: number): ItemParam {
        this['minItems'] = minItems;
        return this;
    }
    public withMinLength(minLength: number): ItemParam {
        this['minLength'] = minLength;
        return this;
    }
    public withMinimum(minimum: Number): ItemParam {
        this['minimum'] = minimum;
        return this;
    }
    public withPattern(pattern: string): ItemParam {
        this['pattern'] = pattern;
        return this;
    }
    public withType(type: string): ItemParam {
        this['type'] = type;
        return this;
    }
    public withValidateRule(validateRule: ValidateRule): ItemParam {
        this['validate_rule'] = validateRule;
        return this;
    }
    public set validateRule(validateRule: ValidateRule  | undefined) {
        this['validate_rule'] = validateRule;
    }
    public get validateRule(): ValidateRule | undefined {
        return this['validate_rule'];
    }
    public withValueType(valueType: number): ItemParam {
        this['value_type'] = valueType;
        return this;
    }
    public set valueType(valueType: number  | undefined) {
        this['value_type'] = valueType;
    }
    public get valueType(): number | undefined {
        return this['value_type'];
    }
    public withXChoiceValue(xChoiceValue: string): ItemParam {
        this['xChoiceValue'] = xChoiceValue;
        return this;
    }
}