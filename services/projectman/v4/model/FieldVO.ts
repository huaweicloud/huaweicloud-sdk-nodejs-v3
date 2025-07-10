import { OptionEntity } from './OptionEntity';


export class FieldVO {
    private 'display_name'?: string;
    private 'created_by'?: string;
    private 'field_type'?: string;
    private 'show_on_card'?: boolean;
    public optional?: boolean;
    private 'all_options'?: Array<OptionEntity>;
    private 'default_value'?: string;
    public constructor() { 
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
}