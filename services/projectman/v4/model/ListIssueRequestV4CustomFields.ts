

export class ListIssueRequestV4CustomFields {
    private 'custom_field'?: string;
    public value?: string;
    public constructor() { 
    }
    public withCustomField(customField: string): ListIssueRequestV4CustomFields {
        this['custom_field'] = customField;
        return this;
    }
    public set customField(customField: string  | undefined) {
        this['custom_field'] = customField;
    }
    public get customField(): string | undefined {
        return this['custom_field'];
    }
    public withValue(value: string): ListIssueRequestV4CustomFields {
        this['value'] = value;
        return this;
    }
}