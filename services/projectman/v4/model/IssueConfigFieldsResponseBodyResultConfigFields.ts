

export class IssueConfigFieldsResponseBodyResultConfigFields {
    private 'display_name'?: string;
    public show?: boolean;
    private 'show_editable'?: boolean;
    public optional?: boolean;
    public controlled?: boolean;
    private 'issue_roles'?: Array<string>;
    public constructor() { 
    }
    public withDisplayName(displayName: string): IssueConfigFieldsResponseBodyResultConfigFields {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withShow(show: boolean): IssueConfigFieldsResponseBodyResultConfigFields {
        this['show'] = show;
        return this;
    }
    public withShowEditable(showEditable: boolean): IssueConfigFieldsResponseBodyResultConfigFields {
        this['show_editable'] = showEditable;
        return this;
    }
    public set showEditable(showEditable: boolean  | undefined) {
        this['show_editable'] = showEditable;
    }
    public get showEditable(): boolean | undefined {
        return this['show_editable'];
    }
    public withOptional(optional: boolean): IssueConfigFieldsResponseBodyResultConfigFields {
        this['optional'] = optional;
        return this;
    }
    public withControlled(controlled: boolean): IssueConfigFieldsResponseBodyResultConfigFields {
        this['controlled'] = controlled;
        return this;
    }
    public withIssueRoles(issueRoles: Array<string>): IssueConfigFieldsResponseBodyResultConfigFields {
        this['issue_roles'] = issueRoles;
        return this;
    }
    public set issueRoles(issueRoles: Array<string>  | undefined) {
        this['issue_roles'] = issueRoles;
    }
    public get issueRoles(): Array<string> | undefined {
        return this['issue_roles'];
    }
}