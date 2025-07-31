

export class SwitchRaspRequestInfo {
    private 'host_id_list'?: Array<string>;
    private 'app_status'?: boolean;
    private 'app_type'?: string;
    private 'policy_id'?: string;
    private 'auto_attach'?: boolean;
    private 'rasp_port_list'?: Array<number>;
    public constructor(hostIdList?: Array<string>, appStatus?: boolean) { 
        this['host_id_list'] = hostIdList;
        this['app_status'] = appStatus;
    }
    public withHostIdList(hostIdList: Array<string>): SwitchRaspRequestInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withAppStatus(appStatus: boolean): SwitchRaspRequestInfo {
        this['app_status'] = appStatus;
        return this;
    }
    public set appStatus(appStatus: boolean  | undefined) {
        this['app_status'] = appStatus;
    }
    public get appStatus(): boolean | undefined {
        return this['app_status'];
    }
    public withAppType(appType: string): SwitchRaspRequestInfo {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): string | undefined {
        return this['app_type'];
    }
    public withPolicyId(policyId: string): SwitchRaspRequestInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withAutoAttach(autoAttach: boolean): SwitchRaspRequestInfo {
        this['auto_attach'] = autoAttach;
        return this;
    }
    public set autoAttach(autoAttach: boolean  | undefined) {
        this['auto_attach'] = autoAttach;
    }
    public get autoAttach(): boolean | undefined {
        return this['auto_attach'];
    }
    public withRaspPortList(raspPortList: Array<number>): SwitchRaspRequestInfo {
        this['rasp_port_list'] = raspPortList;
        return this;
    }
    public set raspPortList(raspPortList: Array<number>  | undefined) {
        this['rasp_port_list'] = raspPortList;
    }
    public get raspPortList(): Array<number> | undefined {
        return this['rasp_port_list'];
    }
}