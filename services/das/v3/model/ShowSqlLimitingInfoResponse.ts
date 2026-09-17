
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlLimitingInfoResponse extends SdkResponse {
    private 'can_use'?: boolean;
    private 'case_sensitive'?: boolean;
    public expire?: boolean;
    private 'error_msg'?: string;
    private 'instance_type'?: string;
    private 'instance_detail_version'?: string;
    private 'can_readonly_set_rule'?: boolean;
    private 'readonly_set_rule_msg'?: string;
    private 'max_rule_limit'?: number;
    private 'can_add_insert_type'?: boolean;
    private 'support_key_str'?: boolean;
    public constructor() { 
        super();
    }
    public withCanUse(canUse: boolean): ShowSqlLimitingInfoResponse {
        this['can_use'] = canUse;
        return this;
    }
    public set canUse(canUse: boolean  | undefined) {
        this['can_use'] = canUse;
    }
    public get canUse(): boolean | undefined {
        return this['can_use'];
    }
    public withCaseSensitive(caseSensitive: boolean): ShowSqlLimitingInfoResponse {
        this['case_sensitive'] = caseSensitive;
        return this;
    }
    public set caseSensitive(caseSensitive: boolean  | undefined) {
        this['case_sensitive'] = caseSensitive;
    }
    public get caseSensitive(): boolean | undefined {
        return this['case_sensitive'];
    }
    public withExpire(expire: boolean): ShowSqlLimitingInfoResponse {
        this['expire'] = expire;
        return this;
    }
    public withErrorMsg(errorMsg: string): ShowSqlLimitingInfoResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withInstanceType(instanceType: string): ShowSqlLimitingInfoResponse {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withInstanceDetailVersion(instanceDetailVersion: string): ShowSqlLimitingInfoResponse {
        this['instance_detail_version'] = instanceDetailVersion;
        return this;
    }
    public set instanceDetailVersion(instanceDetailVersion: string  | undefined) {
        this['instance_detail_version'] = instanceDetailVersion;
    }
    public get instanceDetailVersion(): string | undefined {
        return this['instance_detail_version'];
    }
    public withCanReadonlySetRule(canReadonlySetRule: boolean): ShowSqlLimitingInfoResponse {
        this['can_readonly_set_rule'] = canReadonlySetRule;
        return this;
    }
    public set canReadonlySetRule(canReadonlySetRule: boolean  | undefined) {
        this['can_readonly_set_rule'] = canReadonlySetRule;
    }
    public get canReadonlySetRule(): boolean | undefined {
        return this['can_readonly_set_rule'];
    }
    public withReadonlySetRuleMsg(readonlySetRuleMsg: string): ShowSqlLimitingInfoResponse {
        this['readonly_set_rule_msg'] = readonlySetRuleMsg;
        return this;
    }
    public set readonlySetRuleMsg(readonlySetRuleMsg: string  | undefined) {
        this['readonly_set_rule_msg'] = readonlySetRuleMsg;
    }
    public get readonlySetRuleMsg(): string | undefined {
        return this['readonly_set_rule_msg'];
    }
    public withMaxRuleLimit(maxRuleLimit: number): ShowSqlLimitingInfoResponse {
        this['max_rule_limit'] = maxRuleLimit;
        return this;
    }
    public set maxRuleLimit(maxRuleLimit: number  | undefined) {
        this['max_rule_limit'] = maxRuleLimit;
    }
    public get maxRuleLimit(): number | undefined {
        return this['max_rule_limit'];
    }
    public withCanAddInsertType(canAddInsertType: boolean): ShowSqlLimitingInfoResponse {
        this['can_add_insert_type'] = canAddInsertType;
        return this;
    }
    public set canAddInsertType(canAddInsertType: boolean  | undefined) {
        this['can_add_insert_type'] = canAddInsertType;
    }
    public get canAddInsertType(): boolean | undefined {
        return this['can_add_insert_type'];
    }
    public withSupportKeyStr(supportKeyStr: boolean): ShowSqlLimitingInfoResponse {
        this['support_key_str'] = supportKeyStr;
        return this;
    }
    public set supportKeyStr(supportKeyStr: boolean  | undefined) {
        this['support_key_str'] = supportKeyStr;
    }
    public get supportKeyStr(): boolean | undefined {
        return this['support_key_str'];
    }
}