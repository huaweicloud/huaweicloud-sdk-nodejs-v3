import { AppPolicyInfoList } from './AppPolicyInfoList';


export class SwitchAppWhitelistPolicyHostRequestInfo {
    private 'enable_app_whitelist'?: boolean;
    private 'policy_info_list'?: Array<AppPolicyInfoList>;
    public constructor(enableAppWhitelist?: boolean, policyInfoList?: Array<AppPolicyInfoList>) { 
        this['enable_app_whitelist'] = enableAppWhitelist;
        this['policy_info_list'] = policyInfoList;
    }
    public withEnableAppWhitelist(enableAppWhitelist: boolean): SwitchAppWhitelistPolicyHostRequestInfo {
        this['enable_app_whitelist'] = enableAppWhitelist;
        return this;
    }
    public set enableAppWhitelist(enableAppWhitelist: boolean  | undefined) {
        this['enable_app_whitelist'] = enableAppWhitelist;
    }
    public get enableAppWhitelist(): boolean | undefined {
        return this['enable_app_whitelist'];
    }
    public withPolicyInfoList(policyInfoList: Array<AppPolicyInfoList>): SwitchAppWhitelistPolicyHostRequestInfo {
        this['policy_info_list'] = policyInfoList;
        return this;
    }
    public set policyInfoList(policyInfoList: Array<AppPolicyInfoList>  | undefined) {
        this['policy_info_list'] = policyInfoList;
    }
    public get policyInfoList(): Array<AppPolicyInfoList> | undefined {
        return this['policy_info_list'];
    }
}