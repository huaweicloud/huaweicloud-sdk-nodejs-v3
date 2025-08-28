

export class ClusterSecurityCheckBaselineItemInfo {
    public severity?: ClusterSecurityCheckBaselineItemInfoSeverityEnum | string;
    private 'check_item'?: string;
    private 'check_description'?: string;
    private 'check_remediation'?: string;
    public constructor() { 
    }
    public withSeverity(severity: ClusterSecurityCheckBaselineItemInfoSeverityEnum | string): ClusterSecurityCheckBaselineItemInfo {
        this['severity'] = severity;
        return this;
    }
    public withCheckItem(checkItem: string): ClusterSecurityCheckBaselineItemInfo {
        this['check_item'] = checkItem;
        return this;
    }
    public set checkItem(checkItem: string  | undefined) {
        this['check_item'] = checkItem;
    }
    public get checkItem(): string | undefined {
        return this['check_item'];
    }
    public withCheckDescription(checkDescription: string): ClusterSecurityCheckBaselineItemInfo {
        this['check_description'] = checkDescription;
        return this;
    }
    public set checkDescription(checkDescription: string  | undefined) {
        this['check_description'] = checkDescription;
    }
    public get checkDescription(): string | undefined {
        return this['check_description'];
    }
    public withCheckRemediation(checkRemediation: string): ClusterSecurityCheckBaselineItemInfo {
        this['check_remediation'] = checkRemediation;
        return this;
    }
    public set checkRemediation(checkRemediation: string  | undefined) {
        this['check_remediation'] = checkRemediation;
    }
    public get checkRemediation(): string | undefined {
        return this['check_remediation'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ClusterSecurityCheckBaselineItemInfoSeverityEnum {
    HIGH = 'High',
    MEDIUM = 'Medium',
    LOW = 'Low'
}
