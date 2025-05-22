

export class ListIssueCustomFieldsRequestBody {
    private 'custom_fields'?: Array<string>;
    public names?: Array<string>;
    private 'included_not_in_use'?: boolean;
    public constructor() { 
    }
    public withCustomFields(customFields: Array<string>): ListIssueCustomFieldsRequestBody {
        this['custom_fields'] = customFields;
        return this;
    }
    public set customFields(customFields: Array<string>  | undefined) {
        this['custom_fields'] = customFields;
    }
    public get customFields(): Array<string> | undefined {
        return this['custom_fields'];
    }
    public withNames(names: Array<string>): ListIssueCustomFieldsRequestBody {
        this['names'] = names;
        return this;
    }
    public withIncludedNotInUse(includedNotInUse: boolean): ListIssueCustomFieldsRequestBody {
        this['included_not_in_use'] = includedNotInUse;
        return this;
    }
    public set includedNotInUse(includedNotInUse: boolean  | undefined) {
        this['included_not_in_use'] = includedNotInUse;
    }
    public get includedNotInUse(): boolean | undefined {
        return this['included_not_in_use'];
    }
}