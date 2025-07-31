import { AddAppWhitelistPolicyProcessInfo } from './AddAppWhitelistPolicyProcessInfo';


export class AddAppWhitelistPolicyProcessRequestInfo {
    private 'process_info_list'?: Array<AddAppWhitelistPolicyProcessInfo>;
    public constructor(processInfoList?: Array<AddAppWhitelistPolicyProcessInfo>) { 
        this['process_info_list'] = processInfoList;
    }
    public withProcessInfoList(processInfoList: Array<AddAppWhitelistPolicyProcessInfo>): AddAppWhitelistPolicyProcessRequestInfo {
        this['process_info_list'] = processInfoList;
        return this;
    }
    public set processInfoList(processInfoList: Array<AddAppWhitelistPolicyProcessInfo>  | undefined) {
        this['process_info_list'] = processInfoList;
    }
    public get processInfoList(): Array<AddAppWhitelistPolicyProcessInfo> | undefined {
        return this['process_info_list'];
    }
}