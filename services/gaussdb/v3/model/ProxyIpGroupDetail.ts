import { IpGroupItem } from './IpGroupItem';


export class ProxyIpGroupDetail {
    public id?: string;
    public name?: string;
    private 'ip_list'?: Array<IpGroupItem>;
    public constructor(id?: string, name?: string, ipList?: Array<IpGroupItem>) { 
        this['id'] = id;
        this['name'] = name;
        this['ip_list'] = ipList;
    }
    public withId(id: string): ProxyIpGroupDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ProxyIpGroupDetail {
        this['name'] = name;
        return this;
    }
    public withIpList(ipList: Array<IpGroupItem>): ProxyIpGroupDetail {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<IpGroupItem>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<IpGroupItem> | undefined {
        return this['ip_list'];
    }
}