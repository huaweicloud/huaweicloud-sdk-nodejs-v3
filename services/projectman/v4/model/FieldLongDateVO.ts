import { OptionEntity } from './OptionEntity';


export class FieldLongDateVO {
    public id?: string;
    public code?: string;
    private 'display_name'?: string;
    private 'created_by'?: string;
    private 'created_date'?: number;
    private 'modified_by'?: string;
    private 'modified_date'?: number;
    private 'field_type'?: string;
    private 'field_type_id'?: string;
    private 'field_type_name'?: string;
    private 'definition_type'?: string;
    private 'show_on_card'?: boolean;
    public optional?: boolean;
    public controlled?: boolean;
    public immutable?: boolean;
    public no?: number;
    private 'default_value'?: string;
    public option?: Array<OptionEntity>;
    private 'all_options'?: Array<OptionEntity>;
    private 'has_same_display_name'?: boolean;
    public constructor() { 
    }
    public withId(id: string): FieldLongDateVO {
        this['id'] = id;
        return this;
    }
    public withCode(code: string): FieldLongDateVO {
        this['code'] = code;
        return this;
    }
    public withDisplayName(displayName: string): FieldLongDateVO {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withCreatedBy(createdBy: string): FieldLongDateVO {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreatedDate(createdDate: number): FieldLongDateVO {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: number  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): number | undefined {
        return this['created_date'];
    }
    public withModifiedBy(modifiedBy: string): FieldLongDateVO {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
    public withModifiedDate(modifiedDate: number): FieldLongDateVO {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: number  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): number | undefined {
        return this['modified_date'];
    }
    public withFieldType(fieldType: string): FieldLongDateVO {
        this['field_type'] = fieldType;
        return this;
    }
    public set fieldType(fieldType: string  | undefined) {
        this['field_type'] = fieldType;
    }
    public get fieldType(): string | undefined {
        return this['field_type'];
    }
    public withFieldTypeId(fieldTypeId: string): FieldLongDateVO {
        this['field_type_id'] = fieldTypeId;
        return this;
    }
    public set fieldTypeId(fieldTypeId: string  | undefined) {
        this['field_type_id'] = fieldTypeId;
    }
    public get fieldTypeId(): string | undefined {
        return this['field_type_id'];
    }
    public withFieldTypeName(fieldTypeName: string): FieldLongDateVO {
        this['field_type_name'] = fieldTypeName;
        return this;
    }
    public set fieldTypeName(fieldTypeName: string  | undefined) {
        this['field_type_name'] = fieldTypeName;
    }
    public get fieldTypeName(): string | undefined {
        return this['field_type_name'];
    }
    public withDefinitionType(definitionType: string): FieldLongDateVO {
        this['definition_type'] = definitionType;
        return this;
    }
    public set definitionType(definitionType: string  | undefined) {
        this['definition_type'] = definitionType;
    }
    public get definitionType(): string | undefined {
        return this['definition_type'];
    }
    public withShowOnCard(showOnCard: boolean): FieldLongDateVO {
        this['show_on_card'] = showOnCard;
        return this;
    }
    public set showOnCard(showOnCard: boolean  | undefined) {
        this['show_on_card'] = showOnCard;
    }
    public get showOnCard(): boolean | undefined {
        return this['show_on_card'];
    }
    public withOptional(optional: boolean): FieldLongDateVO {
        this['optional'] = optional;
        return this;
    }
    public withControlled(controlled: boolean): FieldLongDateVO {
        this['controlled'] = controlled;
        return this;
    }
    public withImmutable(immutable: boolean): FieldLongDateVO {
        this['immutable'] = immutable;
        return this;
    }
    public withNo(no: number): FieldLongDateVO {
        this['no'] = no;
        return this;
    }
    public withDefaultValue(defaultValue: string): FieldLongDateVO {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withOption(option: Array<OptionEntity>): FieldLongDateVO {
        this['option'] = option;
        return this;
    }
    public withAllOptions(allOptions: Array<OptionEntity>): FieldLongDateVO {
        this['all_options'] = allOptions;
        return this;
    }
    public set allOptions(allOptions: Array<OptionEntity>  | undefined) {
        this['all_options'] = allOptions;
    }
    public get allOptions(): Array<OptionEntity> | undefined {
        return this['all_options'];
    }
    public withHasSameDisplayName(hasSameDisplayName: boolean): FieldLongDateVO {
        this['has_same_display_name'] = hasSameDisplayName;
        return this;
    }
    public set hasSameDisplayName(hasSameDisplayName: boolean  | undefined) {
        this['has_same_display_name'] = hasSameDisplayName;
    }
    public get hasSameDisplayName(): boolean | undefined {
        return this['has_same_display_name'];
    }
}