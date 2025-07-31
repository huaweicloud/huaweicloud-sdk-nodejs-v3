
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAppWhitelistPolicyResponse extends SdkResponse {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    private 'policy_type'?: string;
    public intercept?: boolean;
    private 'update_time'?: number;
    private 'total_num'?: number;
    private 'unconfirmed_num'?: number;
    private 'trust_num'?: number;
    private 'suspicious_num'?: number;
    private 'malicious_num'?: number;
    private 'unknown_num'?: number;
    private 'auto_apply'?: boolean;
    public constructor() { 
        super();
    }
    public withPolicyId(policyId: string): ShowAppWhitelistPolicyResponse {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): ShowAppWhitelistPolicyResponse {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyType(policyType: string): ShowAppWhitelistPolicyResponse {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): string | undefined {
        return this['policy_type'];
    }
    public withIntercept(intercept: boolean): ShowAppWhitelistPolicyResponse {
        this['intercept'] = intercept;
        return this;
    }
    public withUpdateTime(updateTime: number): ShowAppWhitelistPolicyResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withTotalNum(totalNum: number): ShowAppWhitelistPolicyResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withUnconfirmedNum(unconfirmedNum: number): ShowAppWhitelistPolicyResponse {
        this['unconfirmed_num'] = unconfirmedNum;
        return this;
    }
    public set unconfirmedNum(unconfirmedNum: number  | undefined) {
        this['unconfirmed_num'] = unconfirmedNum;
    }
    public get unconfirmedNum(): number | undefined {
        return this['unconfirmed_num'];
    }
    public withTrustNum(trustNum: number): ShowAppWhitelistPolicyResponse {
        this['trust_num'] = trustNum;
        return this;
    }
    public set trustNum(trustNum: number  | undefined) {
        this['trust_num'] = trustNum;
    }
    public get trustNum(): number | undefined {
        return this['trust_num'];
    }
    public withSuspiciousNum(suspiciousNum: number): ShowAppWhitelistPolicyResponse {
        this['suspicious_num'] = suspiciousNum;
        return this;
    }
    public set suspiciousNum(suspiciousNum: number  | undefined) {
        this['suspicious_num'] = suspiciousNum;
    }
    public get suspiciousNum(): number | undefined {
        return this['suspicious_num'];
    }
    public withMaliciousNum(maliciousNum: number): ShowAppWhitelistPolicyResponse {
        this['malicious_num'] = maliciousNum;
        return this;
    }
    public set maliciousNum(maliciousNum: number  | undefined) {
        this['malicious_num'] = maliciousNum;
    }
    public get maliciousNum(): number | undefined {
        return this['malicious_num'];
    }
    public withUnknownNum(unknownNum: number): ShowAppWhitelistPolicyResponse {
        this['unknown_num'] = unknownNum;
        return this;
    }
    public set unknownNum(unknownNum: number  | undefined) {
        this['unknown_num'] = unknownNum;
    }
    public get unknownNum(): number | undefined {
        return this['unknown_num'];
    }
    public withAutoApply(autoApply: boolean): ShowAppWhitelistPolicyResponse {
        this['auto_apply'] = autoApply;
        return this;
    }
    public set autoApply(autoApply: boolean  | undefined) {
        this['auto_apply'] = autoApply;
    }
    public get autoApply(): boolean | undefined {
        return this['auto_apply'];
    }
}