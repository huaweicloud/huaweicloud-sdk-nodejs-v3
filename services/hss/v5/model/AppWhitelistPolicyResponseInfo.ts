import { AppWhitelistAbnormalInfo } from './AppWhitelistAbnormalInfo';


export class AppWhitelistPolicyResponseInfo {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    private 'policy_type'?: string;
    private 'learning_status'?: string;
    private 'learning_days'?: number;
    private 'specified_dir'?: boolean;
    private 'dir_list'?: Array<string>;
    private 'file_extension_list'?: Array<string>;
    public intercept?: boolean;
    private 'auto_detect'?: boolean;
    private 'not_effect_host_num'?: number;
    private 'effect_host_num'?: number;
    private 'trust_num'?: number;
    private 'suspicious_num'?: number;
    private 'malicious_num'?: number;
    private 'unknown_num'?: number;
    private 'abnormal_info_list'?: Array<AppWhitelistAbnormalInfo>;
    private 'auto_confirm'?: boolean;
    private 'default_policy'?: boolean;
    private 'host_id_list'?: Array<string>;
    public constructor() { 
    }
    public withPolicyId(policyId: string): AppWhitelistPolicyResponseInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): AppWhitelistPolicyResponseInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyType(policyType: string): AppWhitelistPolicyResponseInfo {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): string | undefined {
        return this['policy_type'];
    }
    public withLearningStatus(learningStatus: string): AppWhitelistPolicyResponseInfo {
        this['learning_status'] = learningStatus;
        return this;
    }
    public set learningStatus(learningStatus: string  | undefined) {
        this['learning_status'] = learningStatus;
    }
    public get learningStatus(): string | undefined {
        return this['learning_status'];
    }
    public withLearningDays(learningDays: number): AppWhitelistPolicyResponseInfo {
        this['learning_days'] = learningDays;
        return this;
    }
    public set learningDays(learningDays: number  | undefined) {
        this['learning_days'] = learningDays;
    }
    public get learningDays(): number | undefined {
        return this['learning_days'];
    }
    public withSpecifiedDir(specifiedDir: boolean): AppWhitelistPolicyResponseInfo {
        this['specified_dir'] = specifiedDir;
        return this;
    }
    public set specifiedDir(specifiedDir: boolean  | undefined) {
        this['specified_dir'] = specifiedDir;
    }
    public get specifiedDir(): boolean | undefined {
        return this['specified_dir'];
    }
    public withDirList(dirList: Array<string>): AppWhitelistPolicyResponseInfo {
        this['dir_list'] = dirList;
        return this;
    }
    public set dirList(dirList: Array<string>  | undefined) {
        this['dir_list'] = dirList;
    }
    public get dirList(): Array<string> | undefined {
        return this['dir_list'];
    }
    public withFileExtensionList(fileExtensionList: Array<string>): AppWhitelistPolicyResponseInfo {
        this['file_extension_list'] = fileExtensionList;
        return this;
    }
    public set fileExtensionList(fileExtensionList: Array<string>  | undefined) {
        this['file_extension_list'] = fileExtensionList;
    }
    public get fileExtensionList(): Array<string> | undefined {
        return this['file_extension_list'];
    }
    public withIntercept(intercept: boolean): AppWhitelistPolicyResponseInfo {
        this['intercept'] = intercept;
        return this;
    }
    public withAutoDetect(autoDetect: boolean): AppWhitelistPolicyResponseInfo {
        this['auto_detect'] = autoDetect;
        return this;
    }
    public set autoDetect(autoDetect: boolean  | undefined) {
        this['auto_detect'] = autoDetect;
    }
    public get autoDetect(): boolean | undefined {
        return this['auto_detect'];
    }
    public withNotEffectHostNum(notEffectHostNum: number): AppWhitelistPolicyResponseInfo {
        this['not_effect_host_num'] = notEffectHostNum;
        return this;
    }
    public set notEffectHostNum(notEffectHostNum: number  | undefined) {
        this['not_effect_host_num'] = notEffectHostNum;
    }
    public get notEffectHostNum(): number | undefined {
        return this['not_effect_host_num'];
    }
    public withEffectHostNum(effectHostNum: number): AppWhitelistPolicyResponseInfo {
        this['effect_host_num'] = effectHostNum;
        return this;
    }
    public set effectHostNum(effectHostNum: number  | undefined) {
        this['effect_host_num'] = effectHostNum;
    }
    public get effectHostNum(): number | undefined {
        return this['effect_host_num'];
    }
    public withTrustNum(trustNum: number): AppWhitelistPolicyResponseInfo {
        this['trust_num'] = trustNum;
        return this;
    }
    public set trustNum(trustNum: number  | undefined) {
        this['trust_num'] = trustNum;
    }
    public get trustNum(): number | undefined {
        return this['trust_num'];
    }
    public withSuspiciousNum(suspiciousNum: number): AppWhitelistPolicyResponseInfo {
        this['suspicious_num'] = suspiciousNum;
        return this;
    }
    public set suspiciousNum(suspiciousNum: number  | undefined) {
        this['suspicious_num'] = suspiciousNum;
    }
    public get suspiciousNum(): number | undefined {
        return this['suspicious_num'];
    }
    public withMaliciousNum(maliciousNum: number): AppWhitelistPolicyResponseInfo {
        this['malicious_num'] = maliciousNum;
        return this;
    }
    public set maliciousNum(maliciousNum: number  | undefined) {
        this['malicious_num'] = maliciousNum;
    }
    public get maliciousNum(): number | undefined {
        return this['malicious_num'];
    }
    public withUnknownNum(unknownNum: number): AppWhitelistPolicyResponseInfo {
        this['unknown_num'] = unknownNum;
        return this;
    }
    public set unknownNum(unknownNum: number  | undefined) {
        this['unknown_num'] = unknownNum;
    }
    public get unknownNum(): number | undefined {
        return this['unknown_num'];
    }
    public withAbnormalInfoList(abnormalInfoList: Array<AppWhitelistAbnormalInfo>): AppWhitelistPolicyResponseInfo {
        this['abnormal_info_list'] = abnormalInfoList;
        return this;
    }
    public set abnormalInfoList(abnormalInfoList: Array<AppWhitelistAbnormalInfo>  | undefined) {
        this['abnormal_info_list'] = abnormalInfoList;
    }
    public get abnormalInfoList(): Array<AppWhitelistAbnormalInfo> | undefined {
        return this['abnormal_info_list'];
    }
    public withAutoConfirm(autoConfirm: boolean): AppWhitelistPolicyResponseInfo {
        this['auto_confirm'] = autoConfirm;
        return this;
    }
    public set autoConfirm(autoConfirm: boolean  | undefined) {
        this['auto_confirm'] = autoConfirm;
    }
    public get autoConfirm(): boolean | undefined {
        return this['auto_confirm'];
    }
    public withDefaultPolicy(defaultPolicy: boolean): AppWhitelistPolicyResponseInfo {
        this['default_policy'] = defaultPolicy;
        return this;
    }
    public set defaultPolicy(defaultPolicy: boolean  | undefined) {
        this['default_policy'] = defaultPolicy;
    }
    public get defaultPolicy(): boolean | undefined {
        return this['default_policy'];
    }
    public withHostIdList(hostIdList: Array<string>): AppWhitelistPolicyResponseInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
}