import { OptionEntity } from './OptionEntity';


export class FieldEntity {
    private 'display_name'?: string;
    public code?: string;
    public id?: string;
    public description?: string;
    private 'created_by'?: string;
    private 'created_date'?: number;
    private 'modified_by'?: string;
    private 'definition_type'?: string;
    private 'field_type_name'?: string;
    public required?: boolean;
    public controlled?: boolean;
    public immutable?: boolean;
    public no?: number;
    private 'all_options'?: Array<OptionEntity>;
    public constructor() { 
    }
    public withDisplayName(displayName: string): FieldEntity {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withCode(code: string): FieldEntity {
        this['code'] = code;
        return this;
    }
    public withId(id: string): FieldEntity {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): FieldEntity {
        this['description'] = description;
        return this;
    }
    public withCreatedBy(createdBy: string): FieldEntity {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreatedDate(createdDate: number): FieldEntity {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: number  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): number | undefined {
        return this['created_date'];
    }
    public withModifiedBy(modifiedBy: string): FieldEntity {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
    public withDefinitionType(definitionType: string): FieldEntity {
        this['definition_type'] = definitionType;
        return this;
    }
    public set definitionType(definitionType: string  | undefined) {
        this['definition_type'] = definitionType;
    }
    public get definitionType(): string | undefined {
        return this['definition_type'];
    }
    public withFieldTypeName(fieldTypeName: string): FieldEntity {
        this['field_type_name'] = fieldTypeName;
        return this;
    }
    public set fieldTypeName(fieldTypeName: string  | undefined) {
        this['field_type_name'] = fieldTypeName;
    }
    public get fieldTypeName(): string | undefined {
        return this['field_type_name'];
    }
    public withRequired(required: boolean): FieldEntity {
        this['required'] = required;
        return this;
    }
    public withControlled(controlled: boolean): FieldEntity {
        this['controlled'] = controlled;
        return this;
    }
    public withImmutable(immutable: boolean): FieldEntity {
        this['immutable'] = immutable;
        return this;
    }
    public withNo(no: number): FieldEntity {
        this['no'] = no;
        return this;
    }
    public withAllOptions(allOptions: Array<OptionEntity>): FieldEntity {
        this['all_options'] = allOptions;
        return this;
    }
    public set allOptions(allOptions: Array<OptionEntity>  | undefined) {
        this['all_options'] = allOptions;
    }
    public get allOptions(): Array<OptionEntity> | undefined {
        return this['all_options'];
    }
}