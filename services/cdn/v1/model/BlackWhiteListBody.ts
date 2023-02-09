

export class BlackWhiteListBody {
    public type: number;
    private 'ip_list'?: Array<string> | undefined;
    public constructor(type?: any) { 
        this['type'] = type;
    }
    public withType(type: number): BlackWhiteListBody {
        this['type'] = type;
        return this;
    }
    public withIpList(ipList: Array<string>): BlackWhiteListBody {
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