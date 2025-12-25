

export class UpdateLayoutFieldRequestBody {
    public name?: string;
    public description?: string;
    private 'layout_id'?: string;
    private 'wizard_id'?: string;
    private 'aopworkflow_id'?: string;
    private 'aopworkflow_version_id'?: string;
    private 'playbook_id'?: string;
    private 'playbook_version_id'?: string;
    private 'default_value'?: string;
    private 'display_type'?: string;
    private 'field_type'?: string;
    private 'extra_json'?: string;
    private 'field_tooltip'?: string;
    private 'json_schema'?: string;
    public readonly?: boolean;
    public required?: boolean;
    public searchable?: boolean;
    public visible?: boolean;
    public maintainable?: boolean;
    public editable?: boolean;
    public creatable?: boolean;
    private 'boa_version'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateLayoutFieldRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateLayoutFieldRequestBody {
        this['description'] = description;
        return this;
    }
    public withLayoutId(layoutId: string): UpdateLayoutFieldRequestBody {
        this['layout_id'] = layoutId;
        return this;
    }
    public set layoutId(layoutId: string  | undefined) {
        this['layout_id'] = layoutId;
    }
    public get layoutId(): string | undefined {
        return this['layout_id'];
    }
    public withWizardId(wizardId: string): UpdateLayoutFieldRequestBody {
        this['wizard_id'] = wizardId;
        return this;
    }
    public set wizardId(wizardId: string  | undefined) {
        this['wizard_id'] = wizardId;
    }
    public get wizardId(): string | undefined {
        return this['wizard_id'];
    }
    public withAopworkflowId(aopworkflowId: string): UpdateLayoutFieldRequestBody {
        this['aopworkflow_id'] = aopworkflowId;
        return this;
    }
    public set aopworkflowId(aopworkflowId: string  | undefined) {
        this['aopworkflow_id'] = aopworkflowId;
    }
    public get aopworkflowId(): string | undefined {
        return this['aopworkflow_id'];
    }
    public withAopworkflowVersionId(aopworkflowVersionId: string): UpdateLayoutFieldRequestBody {
        this['aopworkflow_version_id'] = aopworkflowVersionId;
        return this;
    }
    public set aopworkflowVersionId(aopworkflowVersionId: string  | undefined) {
        this['aopworkflow_version_id'] = aopworkflowVersionId;
    }
    public get aopworkflowVersionId(): string | undefined {
        return this['aopworkflow_version_id'];
    }
    public withPlaybookId(playbookId: string): UpdateLayoutFieldRequestBody {
        this['playbook_id'] = playbookId;
        return this;
    }
    public set playbookId(playbookId: string  | undefined) {
        this['playbook_id'] = playbookId;
    }
    public get playbookId(): string | undefined {
        return this['playbook_id'];
    }
    public withPlaybookVersionId(playbookVersionId: string): UpdateLayoutFieldRequestBody {
        this['playbook_version_id'] = playbookVersionId;
        return this;
    }
    public set playbookVersionId(playbookVersionId: string  | undefined) {
        this['playbook_version_id'] = playbookVersionId;
    }
    public get playbookVersionId(): string | undefined {
        return this['playbook_version_id'];
    }
    public withDefaultValue(defaultValue: string): UpdateLayoutFieldRequestBody {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withDisplayType(displayType: string): UpdateLayoutFieldRequestBody {
        this['display_type'] = displayType;
        return this;
    }
    public set displayType(displayType: string  | undefined) {
        this['display_type'] = displayType;
    }
    public get displayType(): string | undefined {
        return this['display_type'];
    }
    public withFieldType(fieldType: string): UpdateLayoutFieldRequestBody {
        this['field_type'] = fieldType;
        return this;
    }
    public set fieldType(fieldType: string  | undefined) {
        this['field_type'] = fieldType;
    }
    public get fieldType(): string | undefined {
        return this['field_type'];
    }
    public withExtraJson(extraJson: string): UpdateLayoutFieldRequestBody {
        this['extra_json'] = extraJson;
        return this;
    }
    public set extraJson(extraJson: string  | undefined) {
        this['extra_json'] = extraJson;
    }
    public get extraJson(): string | undefined {
        return this['extra_json'];
    }
    public withFieldTooltip(fieldTooltip: string): UpdateLayoutFieldRequestBody {
        this['field_tooltip'] = fieldTooltip;
        return this;
    }
    public set fieldTooltip(fieldTooltip: string  | undefined) {
        this['field_tooltip'] = fieldTooltip;
    }
    public get fieldTooltip(): string | undefined {
        return this['field_tooltip'];
    }
    public withJsonSchema(jsonSchema: string): UpdateLayoutFieldRequestBody {
        this['json_schema'] = jsonSchema;
        return this;
    }
    public set jsonSchema(jsonSchema: string  | undefined) {
        this['json_schema'] = jsonSchema;
    }
    public get jsonSchema(): string | undefined {
        return this['json_schema'];
    }
    public withReadonly(readonly: boolean): UpdateLayoutFieldRequestBody {
        this['readonly'] = readonly;
        return this;
    }
    public withRequired(required: boolean): UpdateLayoutFieldRequestBody {
        this['required'] = required;
        return this;
    }
    public withSearchable(searchable: boolean): UpdateLayoutFieldRequestBody {
        this['searchable'] = searchable;
        return this;
    }
    public withVisible(visible: boolean): UpdateLayoutFieldRequestBody {
        this['visible'] = visible;
        return this;
    }
    public withMaintainable(maintainable: boolean): UpdateLayoutFieldRequestBody {
        this['maintainable'] = maintainable;
        return this;
    }
    public withEditable(editable: boolean): UpdateLayoutFieldRequestBody {
        this['editable'] = editable;
        return this;
    }
    public withCreatable(creatable: boolean): UpdateLayoutFieldRequestBody {
        this['creatable'] = creatable;
        return this;
    }
    public withBoaVersion(boaVersion: string): UpdateLayoutFieldRequestBody {
        this['boa_version'] = boaVersion;
        return this;
    }
    public set boaVersion(boaVersion: string  | undefined) {
        this['boa_version'] = boaVersion;
    }
    public get boaVersion(): string | undefined {
        return this['boa_version'];
    }
}