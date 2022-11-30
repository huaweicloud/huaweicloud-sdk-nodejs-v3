

export class Whitelist {
    private 'group_name': string | undefined;
    private 'ip_list': Array<string> | undefined;
    public constructor(groupName?: any, ipList?: any) { 
        this['group_name'] = groupName;
        this['ip_list'] = ipList;
    }
    public withGroupName(groupName: string): Whitelist {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName() {
        return this['group_name'];
    }
    public withIpList(ipList: Array<string>): Whitelist {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<string> | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList() {
        return this['ip_list'];
    }
}