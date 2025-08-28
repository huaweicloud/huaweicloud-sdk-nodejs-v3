import { ClusterSecurityCheckBaselineItemInfo } from './ClusterSecurityCheckBaselineItemInfo';


export class ClusterSecurityCheckBaseLineDetectionInfo {
    public severity?: ClusterSecurityCheckBaseLineDetectionInfoSeverityEnum | string;
    private 'check_name'?: string;
    private 'check_type'?: string;
    public standard?: string;
    private 'check_rule_num'?: number;
    private 'failed_rule_num'?: number;
    private 'check_type_desc'?: string;
    private 'baseline_item_list'?: Array<ClusterSecurityCheckBaselineItemInfo>;
    public constructor() { 
    }
    public withSeverity(severity: ClusterSecurityCheckBaseLineDetectionInfoSeverityEnum | string): ClusterSecurityCheckBaseLineDetectionInfo {
        this['severity'] = severity;
        return this;
    }
    public withCheckName(checkName: string): ClusterSecurityCheckBaseLineDetectionInfo {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withCheckType(checkType: string): ClusterSecurityCheckBaseLineDetectionInfo {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withStandard(standard: string): ClusterSecurityCheckBaseLineDetectionInfo {
        this['standard'] = standard;
        return this;
    }
    public withCheckRuleNum(checkRuleNum: number): ClusterSecurityCheckBaseLineDetectionInfo {
        this['check_rule_num'] = checkRuleNum;
        return this;
    }
    public set checkRuleNum(checkRuleNum: number  | undefined) {
        this['check_rule_num'] = checkRuleNum;
    }
    public get checkRuleNum(): number | undefined {
        return this['check_rule_num'];
    }
    public withFailedRuleNum(failedRuleNum: number): ClusterSecurityCheckBaseLineDetectionInfo {
        this['failed_rule_num'] = failedRuleNum;
        return this;
    }
    public set failedRuleNum(failedRuleNum: number  | undefined) {
        this['failed_rule_num'] = failedRuleNum;
    }
    public get failedRuleNum(): number | undefined {
        return this['failed_rule_num'];
    }
    public withCheckTypeDesc(checkTypeDesc: string): ClusterSecurityCheckBaseLineDetectionInfo {
        this['check_type_desc'] = checkTypeDesc;
        return this;
    }
    public set checkTypeDesc(checkTypeDesc: string  | undefined) {
        this['check_type_desc'] = checkTypeDesc;
    }
    public get checkTypeDesc(): string | undefined {
        return this['check_type_desc'];
    }
    public withBaselineItemList(baselineItemList: Array<ClusterSecurityCheckBaselineItemInfo>): ClusterSecurityCheckBaseLineDetectionInfo {
        this['baseline_item_list'] = baselineItemList;
        return this;
    }
    public set baselineItemList(baselineItemList: Array<ClusterSecurityCheckBaselineItemInfo>  | undefined) {
        this['baseline_item_list'] = baselineItemList;
    }
    public get baselineItemList(): Array<ClusterSecurityCheckBaselineItemInfo> | undefined {
        return this['baseline_item_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ClusterSecurityCheckBaseLineDetectionInfoSeverityEnum {
    HIGH = 'High',
    MEDIUM = 'Medium',
    LOW = 'Low'
}
