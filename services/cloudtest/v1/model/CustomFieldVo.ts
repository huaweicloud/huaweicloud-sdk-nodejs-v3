

export class CustomFieldVo {
    public type?: string;
    public value?: string;
    private 'custom_field_param'?: string;
    private 'user_name'?: string;
    public constructor() { 
    }
    public withType(type: string): CustomFieldVo {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): CustomFieldVo {
        this['value'] = value;
        return this;
    }
    public withCustomFieldParam(customFieldParam: string): CustomFieldVo {
        this['custom_field_param'] = customFieldParam;
        return this;
    }
    public set customFieldParam(customFieldParam: string  | undefined) {
        this['custom_field_param'] = customFieldParam;
    }
    public get customFieldParam(): string | undefined {
        return this['custom_field_param'];
    }
    public withUserName(userName: string): CustomFieldVo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}