

export class SwitchAppWhitelistPolicyLearnStatusRequestInfo {
    private 'switch_status'?: number;
    private 'host_id_list'?: Array<string>;
    public constructor() { 
    }
    public withSwitchStatus(switchStatus: number): SwitchAppWhitelistPolicyLearnStatusRequestInfo {
        this['switch_status'] = switchStatus;
        return this;
    }
    public set switchStatus(switchStatus: number  | undefined) {
        this['switch_status'] = switchStatus;
    }
    public get switchStatus(): number | undefined {
        return this['switch_status'];
    }
    public withHostIdList(hostIdList: Array<string>): SwitchAppWhitelistPolicyLearnStatusRequestInfo {
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