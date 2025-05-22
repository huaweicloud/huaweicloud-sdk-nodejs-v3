import { NewCustomField } from './NewCustomField';


export class IssueDetailCustomField {
    private 'custom_field'?: string;
    private 'field_name'?: string;
    public value?: string;
    private 'field_type'?: string;
    public description?: string;
    public constructor() { 
    }
    public withCustomField(customField: string): IssueDetailCustomField {
        this['custom_field'] = customField;
        return this;
    }
    public set customField(customField: string  | undefined) {
        this['custom_field'] = customField;
    }
    public get customField(): string | undefined {
        return this['custom_field'];
    }
    public withFieldName(fieldName: string): IssueDetailCustomField {
        this['field_name'] = fieldName;
        return this;
    }
    public set fieldName(fieldName: string  | undefined) {
        this['field_name'] = fieldName;
    }
    public get fieldName(): string | undefined {
        return this['field_name'];
    }
    public withValue(value: string): IssueDetailCustomField {
        this['value'] = value;
        return this;
    }
    public withFieldType(fieldType: string): IssueDetailCustomField {
        this['field_type'] = fieldType;
        return this;
    }
    public set fieldType(fieldType: string  | undefined) {
        this['field_type'] = fieldType;
    }
    public get fieldType(): string | undefined {
        return this['field_type'];
    }
    public withDescription(description: string): IssueDetailCustomField {
        this['description'] = description;
        return this;
    }
}