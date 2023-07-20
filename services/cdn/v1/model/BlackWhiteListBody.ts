

export class BlackWhiteListBody {
    public type?: number;
    private 'ip_list'?: Array<string>;
    public constructor(type?: number) { 
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
    public set ipList(ipList: Array<string>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<string> | undefined {
        return this['ip_list'];
    }
}