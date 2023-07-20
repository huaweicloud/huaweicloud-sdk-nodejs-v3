import { IpGroup } from './IpGroup';


export class WhiteBlackIpResponseBody {
    public id?: string;
    public name?: string;
    public policyid?: string;
    public timestamp?: number;
    public description?: string;
    public status?: number;
    public addr?: string;
    public white?: number;
    private 'ip_group'?: IpGroup;
    public constructor() { 
    }
    public withId(id: string): WhiteBlackIpResponseBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WhiteBlackIpResponseBody {
        this['name'] = name;
        return this;
    }
    public withPolicyid(policyid: string): WhiteBlackIpResponseBody {
        this['policyid'] = policyid;
        return this;
    }
    public withTimestamp(timestamp: number): WhiteBlackIpResponseBody {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): WhiteBlackIpResponseBody {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): WhiteBlackIpResponseBody {
        this['status'] = status;
        return this;
    }
    public withAddr(addr: string): WhiteBlackIpResponseBody {
        this['addr'] = addr;
        return this;
    }
    public withWhite(white: number): WhiteBlackIpResponseBody {
        this['white'] = white;
        return this;
    }
    public withIpGroup(ipGroup: IpGroup): WhiteBlackIpResponseBody {
        this['ip_group'] = ipGroup;
        return this;
    }
    public set ipGroup(ipGroup: IpGroup  | undefined) {
        this['ip_group'] = ipGroup;
    }
    public get ipGroup(): IpGroup | undefined {
        return this['ip_group'];
    }
}