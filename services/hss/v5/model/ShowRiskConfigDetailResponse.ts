
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRiskConfigDetailResponse extends SdkResponse {
    public severity?: string;
    private 'check_type'?: string;
    private 'check_type_desc'?: string;
    private 'check_rule_num'?: number;
    private 'failed_rule_num'?: number;
    private 'passed_rule_num'?: number;
    private 'ignored_rule_num'?: number;
    private 'host_num'?: number;
    public constructor() { 
        super();
    }
    public withSeverity(severity: string): ShowRiskConfigDetailResponse {
        this['severity'] = severity;
        return this;
    }
    public withCheckType(checkType: string): ShowRiskConfigDetailResponse {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withCheckTypeDesc(checkTypeDesc: string): ShowRiskConfigDetailResponse {
        this['check_type_desc'] = checkTypeDesc;
        return this;
    }
    public set checkTypeDesc(checkTypeDesc: string  | undefined) {
        this['check_type_desc'] = checkTypeDesc;
    }
    public get checkTypeDesc(): string | undefined {
        return this['check_type_desc'];
    }
    public withCheckRuleNum(checkRuleNum: number): ShowRiskConfigDetailResponse {
        this['check_rule_num'] = checkRuleNum;
        return this;
    }
    public set checkRuleNum(checkRuleNum: number  | undefined) {
        this['check_rule_num'] = checkRuleNum;
    }
    public get checkRuleNum(): number | undefined {
        return this['check_rule_num'];
    }
    public withFailedRuleNum(failedRuleNum: number): ShowRiskConfigDetailResponse {
        this['failed_rule_num'] = failedRuleNum;
        return this;
    }
    public set failedRuleNum(failedRuleNum: number  | undefined) {
        this['failed_rule_num'] = failedRuleNum;
    }
    public get failedRuleNum(): number | undefined {
        return this['failed_rule_num'];
    }
    public withPassedRuleNum(passedRuleNum: number): ShowRiskConfigDetailResponse {
        this['passed_rule_num'] = passedRuleNum;
        return this;
    }
    public set passedRuleNum(passedRuleNum: number  | undefined) {
        this['passed_rule_num'] = passedRuleNum;
    }
    public get passedRuleNum(): number | undefined {
        return this['passed_rule_num'];
    }
    public withIgnoredRuleNum(ignoredRuleNum: number): ShowRiskConfigDetailResponse {
        this['ignored_rule_num'] = ignoredRuleNum;
        return this;
    }
    public set ignoredRuleNum(ignoredRuleNum: number  | undefined) {
        this['ignored_rule_num'] = ignoredRuleNum;
    }
    public get ignoredRuleNum(): number | undefined {
        return this['ignored_rule_num'];
    }
    public withHostNum(hostNum: number): ShowRiskConfigDetailResponse {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
}