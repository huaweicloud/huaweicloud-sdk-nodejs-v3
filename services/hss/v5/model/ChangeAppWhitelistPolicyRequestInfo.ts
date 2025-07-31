

export class ChangeAppWhitelistPolicyRequestInfo {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    private 'policy_type'?: string;
    private 'learning_days'?: number;
    private 'specified_dir'?: boolean;
    public intercept?: boolean;
    private 'auto_confirm'?: boolean;
    private 'auto_detect'?: boolean;
    private 'dir_list'?: Array<string>;
    private 'ext_list'?: Array<string>;
    private 'host_id_list'?: Array<string>;
    public constructor(policyId?: string, policyName?: string, policyType?: string, learningDays?: number, intercept?: boolean, autoConfirm?: boolean, autoDetect?: boolean, hostIdList?: Array<string>) { 
        this['policy_id'] = policyId;
        this['policy_name'] = policyName;
        this['policy_type'] = policyType;
        this['learning_days'] = learningDays;
        this['intercept'] = intercept;
        this['auto_confirm'] = autoConfirm;
        this['auto_detect'] = autoDetect;
        this['host_id_list'] = hostIdList;
    }
    public withPolicyId(policyId: string): ChangeAppWhitelistPolicyRequestInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): ChangeAppWhitelistPolicyRequestInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyType(policyType: string): ChangeAppWhitelistPolicyRequestInfo {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): string | undefined {
        return this['policy_type'];
    }
    public withLearningDays(learningDays: number): ChangeAppWhitelistPolicyRequestInfo {
        this['learning_days'] = learningDays;
        return this;
    }
    public set learningDays(learningDays: number  | undefined) {
        this['learning_days'] = learningDays;
    }
    public get learningDays(): number | undefined {
        return this['learning_days'];
    }
    public withSpecifiedDir(specifiedDir: boolean): ChangeAppWhitelistPolicyRequestInfo {
        this['specified_dir'] = specifiedDir;
        return this;
    }
    public set specifiedDir(specifiedDir: boolean  | undefined) {
        this['specified_dir'] = specifiedDir;
    }
    public get specifiedDir(): boolean | undefined {
        return this['specified_dir'];
    }
    public withIntercept(intercept: boolean): ChangeAppWhitelistPolicyRequestInfo {
        this['intercept'] = intercept;
        return this;
    }
    public withAutoConfirm(autoConfirm: boolean): ChangeAppWhitelistPolicyRequestInfo {
        this['auto_confirm'] = autoConfirm;
        return this;
    }
    public set autoConfirm(autoConfirm: boolean  | undefined) {
        this['auto_confirm'] = autoConfirm;
    }
    public get autoConfirm(): boolean | undefined {
        return this['auto_confirm'];
    }
    public withAutoDetect(autoDetect: boolean): ChangeAppWhitelistPolicyRequestInfo {
        this['auto_detect'] = autoDetect;
        return this;
    }
    public set autoDetect(autoDetect: boolean  | undefined) {
        this['auto_detect'] = autoDetect;
    }
    public get autoDetect(): boolean | undefined {
        return this['auto_detect'];
    }
    public withDirList(dirList: Array<string>): ChangeAppWhitelistPolicyRequestInfo {
        this['dir_list'] = dirList;
        return this;
    }
    public set dirList(dirList: Array<string>  | undefined) {
        this['dir_list'] = dirList;
    }
    public get dirList(): Array<string> | undefined {
        return this['dir_list'];
    }
    public withExtList(extList: Array<string>): ChangeAppWhitelistPolicyRequestInfo {
        this['ext_list'] = extList;
        return this;
    }
    public set extList(extList: Array<string>  | undefined) {
        this['ext_list'] = extList;
    }
    public get extList(): Array<string> | undefined {
        return this['ext_list'];
    }
    public withHostIdList(hostIdList: Array<string>): ChangeAppWhitelistPolicyRequestInfo {
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