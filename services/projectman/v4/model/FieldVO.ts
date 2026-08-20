import { OptionEntity } from './OptionEntity';


export class FieldVO {
    public id?: string;
    public code?: string;
    private 'display_name'?: string;
    private 'created_by'?: string;
    private 'created_date'?: string;
    private 'modified_by'?: string;
    private 'modified_date'?: string;
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
    public withId(id: string): FieldVO {
        this['id'] = id;
        return this;
    }
    public withCode(code: string): FieldVO {
        this['code'] = code;
        return this;
    }
    public withDisplayName(displayName: string): FieldVO {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withCreatedBy(createdBy: string): FieldVO {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreatedDate(createdDate: string): FieldVO {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withModifiedBy(modifiedBy: string): FieldVO {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
    public withModifiedDate(modifiedDate: string): FieldVO {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: string  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): string | undefined {
        return this['modified_date'];
    }
    public withFieldType(fieldType: string): FieldVO {
        this['field_type'] = fieldType;
        return this;
    }
    public set fieldType(fieldType: string  | undefined) {
        this['field_type'] = fieldType;
    }
    public get fieldType(): string | undefined {
        return this['field_type'];
    }
    public withFieldTypeId(fieldTypeId: string): FieldVO {
        this['field_type_id'] = fieldTypeId;
        return this;
    }
    public set fieldTypeId(fieldTypeId: string  | undefined) {
        this['field_type_id'] = fieldTypeId;
    }
    public get fieldTypeId(): string | undefined {
        return this['field_type_id'];
    }
    public withFieldTypeName(fieldTypeName: string): FieldVO {
        this['field_type_name'] = fieldTypeName;
        return this;
    }
    public set fieldTypeName(fieldTypeName: string  | undefined) {
        this['field_type_name'] = fieldTypeName;
    }
    public get fieldTypeName(): string | undefined {
        return this['field_type_name'];
    }
    public withDefinitionType(definitionType: string): FieldVO {
        this['definition_type'] = definitionType;
        return this;
    }
    public set definitionType(definitionType: string  | undefined) {
        this['definition_type'] = definitionType;
    }
    public get definitionType(): string | undefined {
        return this['definition_type'];
    }
    public withShowOnCard(showOnCard: boolean): FieldVO {
        this['show_on_card'] = showOnCard;
        return this;
    }
    public set showOnCard(showOnCard: boolean  | undefined) {
        this['show_on_card'] = showOnCard;
    }
    public get showOnCard(): boolean | undefined {
        return this['show_on_card'];
    }
    public withOptional(optional: boolean): FieldVO {
        this['optional'] = optional;
        return this;
    }
    public withControlled(controlled: boolean): FieldVO {
        this['controlled'] = controlled;
        return this;
    }
    public withImmutable(immutable: boolean): FieldVO {
        this['immutable'] = immutable;
        return this;
    }
    public withNo(no: number): FieldVO {
        this['no'] = no;
        return this;
    }
    public withDefaultValue(defaultValue: string): FieldVO {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withOption(option: Array<OptionEntity>): FieldVO {
        this['option'] = option;
        return this;
    }
    public withAllOptions(allOptions: Array<OptionEntity>): FieldVO {
        this['all_options'] = allOptions;
        return this;
    }
    public set allOptions(allOptions: Array<OptionEntity>  | undefined) {
        this['all_options'] = allOptions;
    }
    public get allOptions(): Array<OptionEntity> | undefined {
        return this['all_options'];
    }
    public withHasSameDisplayName(hasSameDisplayName: boolean): FieldVO {
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