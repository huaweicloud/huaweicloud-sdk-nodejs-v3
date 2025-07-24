import { AwParamBasicValue } from './AwParamBasicValue';
import { ItemParam } from './ItemParam';
import { MockInfo } from './MockInfo';
import { Number } from './Number';
import { ValidateRule } from './ValidateRule';


export class AwParam {
    private 'basic_value'?: AwParamBasicValue;
    private 'basic_value_list'?: Array<AwParamBasicValue>;
    private 'custom_body'?: string;
    public defaultValue?: string;
    public description?: string;
    public disabled?: boolean;
    private 'drop_down_value'?: string;
    private 'enum_type'?: string;
    private 'enum_type_selected'?: string;
    public format?: string;
    private 'in_type'?: number;
    public isChecked?: boolean;
    private 'is_big_field'?: boolean;
    private 'is_body_custom'?: number;
    private 'is_contract_param'?: number;
    private 'is_sensitive'?: boolean;
    public item?: ItemParam;
    public maxItems?: number;
    public maxLength?: number;
    public maximum?: Number;
    public minItems?: number;
    public minLength?: number;
    public minimum?: Number;
    public mock?: MockInfo;
    public name?: string;
    private 'object_value'?: Array<AwParam>;
    private 'object_value_list'?: Array<Array<AwParam>>;
    public pattern?: string;
    public required?: boolean;
    public type?: string;
    private 'validate_rule'?: ValidateRule;
    private 'value_type'?: number;
    public xChoiceValue?: string;
    public constructor() { 
    }
    public withBasicValue(basicValue: AwParamBasicValue): AwParam {
        this['basic_value'] = basicValue;
        return this;
    }
    public set basicValue(basicValue: AwParamBasicValue  | undefined) {
        this['basic_value'] = basicValue;
    }
    public get basicValue(): AwParamBasicValue | undefined {
        return this['basic_value'];
    }
    public withBasicValueList(basicValueList: Array<AwParamBasicValue>): AwParam {
        this['basic_value_list'] = basicValueList;
        return this;
    }
    public set basicValueList(basicValueList: Array<AwParamBasicValue>  | undefined) {
        this['basic_value_list'] = basicValueList;
    }
    public get basicValueList(): Array<AwParamBasicValue> | undefined {
        return this['basic_value_list'];
    }
    public withCustomBody(customBody: string): AwParam {
        this['custom_body'] = customBody;
        return this;
    }
    public set customBody(customBody: string  | undefined) {
        this['custom_body'] = customBody;
    }
    public get customBody(): string | undefined {
        return this['custom_body'];
    }
    public withDefaultValue(defaultValue: string): AwParam {
        this['defaultValue'] = defaultValue;
        return this;
    }
    public withDescription(description: string): AwParam {
        this['description'] = description;
        return this;
    }
    public withDisabled(disabled: boolean): AwParam {
        this['disabled'] = disabled;
        return this;
    }
    public withDropDownValue(dropDownValue: string): AwParam {
        this['drop_down_value'] = dropDownValue;
        return this;
    }
    public set dropDownValue(dropDownValue: string  | undefined) {
        this['drop_down_value'] = dropDownValue;
    }
    public get dropDownValue(): string | undefined {
        return this['drop_down_value'];
    }
    public withEnumType(enumType: string): AwParam {
        this['enum_type'] = enumType;
        return this;
    }
    public set enumType(enumType: string  | undefined) {
        this['enum_type'] = enumType;
    }
    public get enumType(): string | undefined {
        return this['enum_type'];
    }
    public withEnumTypeSelected(enumTypeSelected: string): AwParam {
        this['enum_type_selected'] = enumTypeSelected;
        return this;
    }
    public set enumTypeSelected(enumTypeSelected: string  | undefined) {
        this['enum_type_selected'] = enumTypeSelected;
    }
    public get enumTypeSelected(): string | undefined {
        return this['enum_type_selected'];
    }
    public withFormat(format: string): AwParam {
        this['format'] = format;
        return this;
    }
    public withInType(inType: number): AwParam {
        this['in_type'] = inType;
        return this;
    }
    public set inType(inType: number  | undefined) {
        this['in_type'] = inType;
    }
    public get inType(): number | undefined {
        return this['in_type'];
    }
    public withIsChecked(isChecked: boolean): AwParam {
        this['isChecked'] = isChecked;
        return this;
    }
    public withIsBigField(isBigField: boolean): AwParam {
        this['is_big_field'] = isBigField;
        return this;
    }
    public set isBigField(isBigField: boolean  | undefined) {
        this['is_big_field'] = isBigField;
    }
    public get isBigField(): boolean | undefined {
        return this['is_big_field'];
    }
    public withIsBodyCustom(isBodyCustom: number): AwParam {
        this['is_body_custom'] = isBodyCustom;
        return this;
    }
    public set isBodyCustom(isBodyCustom: number  | undefined) {
        this['is_body_custom'] = isBodyCustom;
    }
    public get isBodyCustom(): number | undefined {
        return this['is_body_custom'];
    }
    public withIsContractParam(isContractParam: number): AwParam {
        this['is_contract_param'] = isContractParam;
        return this;
    }
    public set isContractParam(isContractParam: number  | undefined) {
        this['is_contract_param'] = isContractParam;
    }
    public get isContractParam(): number | undefined {
        return this['is_contract_param'];
    }
    public withIsSensitive(isSensitive: boolean): AwParam {
        this['is_sensitive'] = isSensitive;
        return this;
    }
    public set isSensitive(isSensitive: boolean  | undefined) {
        this['is_sensitive'] = isSensitive;
    }
    public get isSensitive(): boolean | undefined {
        return this['is_sensitive'];
    }
    public withItem(item: ItemParam): AwParam {
        this['item'] = item;
        return this;
    }
    public withMaxItems(maxItems: number): AwParam {
        this['maxItems'] = maxItems;
        return this;
    }
    public withMaxLength(maxLength: number): AwParam {
        this['maxLength'] = maxLength;
        return this;
    }
    public withMaximum(maximum: Number): AwParam {
        this['maximum'] = maximum;
        return this;
    }
    public withMinItems(minItems: number): AwParam {
        this['minItems'] = minItems;
        return this;
    }
    public withMinLength(minLength: number): AwParam {
        this['minLength'] = minLength;
        return this;
    }
    public withMinimum(minimum: Number): AwParam {
        this['minimum'] = minimum;
        return this;
    }
    public withMock(mock: MockInfo): AwParam {
        this['mock'] = mock;
        return this;
    }
    public withName(name: string): AwParam {
        this['name'] = name;
        return this;
    }
    public withObjectValue(objectValue: Array<AwParam>): AwParam {
        this['object_value'] = objectValue;
        return this;
    }
    public set objectValue(objectValue: Array<AwParam>  | undefined) {
        this['object_value'] = objectValue;
    }
    public get objectValue(): Array<AwParam> | undefined {
        return this['object_value'];
    }
    public withObjectValueList(objectValueList: Array<Array<AwParam>>): AwParam {
        this['object_value_list'] = objectValueList;
        return this;
    }
    public set objectValueList(objectValueList: Array<Array<AwParam>>  | undefined) {
        this['object_value_list'] = objectValueList;
    }
    public get objectValueList(): Array<Array<AwParam>> | undefined {
        return this['object_value_list'];
    }
    public withPattern(pattern: string): AwParam {
        this['pattern'] = pattern;
        return this;
    }
    public withRequired(required: boolean): AwParam {
        this['required'] = required;
        return this;
    }
    public withType(type: string): AwParam {
        this['type'] = type;
        return this;
    }
    public withValidateRule(validateRule: ValidateRule): AwParam {
        this['validate_rule'] = validateRule;
        return this;
    }
    public set validateRule(validateRule: ValidateRule  | undefined) {
        this['validate_rule'] = validateRule;
    }
    public get validateRule(): ValidateRule | undefined {
        return this['validate_rule'];
    }
    public withValueType(valueType: number): AwParam {
        this['value_type'] = valueType;
        return this;
    }
    public set valueType(valueType: number  | undefined) {
        this['value_type'] = valueType;
    }
    public get valueType(): number | undefined {
        return this['value_type'];
    }
    public withXChoiceValue(xChoiceValue: string): AwParam {
        this['xChoiceValue'] = xChoiceValue;
        return this;
    }
}