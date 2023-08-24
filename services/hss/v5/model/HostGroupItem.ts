

export class HostGroupItem {
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'host_num'?: number;
    private 'risk_host_num'?: number;
    private 'unprotect_host_num'?: number;
    private 'host_id_list'?: Array<string>;
    private 'is_outside'?: boolean;
    public constructor() { 
    }
    public withGroupId(groupId: string): HostGroupItem {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): HostGroupItem {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withHostNum(hostNum: number): HostGroupItem {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withRiskHostNum(riskHostNum: number): HostGroupItem {
        this['risk_host_num'] = riskHostNum;
        return this;
    }
    public set riskHostNum(riskHostNum: number  | undefined) {
        this['risk_host_num'] = riskHostNum;
    }
    public get riskHostNum(): number | undefined {
        return this['risk_host_num'];
    }
    public withUnprotectHostNum(unprotectHostNum: number): HostGroupItem {
        this['unprotect_host_num'] = unprotectHostNum;
        return this;
    }
    public set unprotectHostNum(unprotectHostNum: number  | undefined) {
        this['unprotect_host_num'] = unprotectHostNum;
    }
    public get unprotectHostNum(): number | undefined {
        return this['unprotect_host_num'];
    }
    public withHostIdList(hostIdList: Array<string>): HostGroupItem {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withIsOutside(isOutside: boolean): HostGroupItem {
        this['is_outside'] = isOutside;
        return this;
    }
    public set isOutside(isOutside: boolean  | undefined) {
        this['is_outside'] = isOutside;
    }
    public get isOutside(): boolean | undefined {
        return this['is_outside'];
    }
}