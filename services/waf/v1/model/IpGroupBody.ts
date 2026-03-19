import { RuleInfo } from './RuleInfo';
import { ShareInfo } from './ShareInfo';


export class IpGroupBody {
    public id?: string;
    public name?: string;
    public ips?: string;
    private 'ip_remarks'?: { [key: string]: string; };
    public size?: number;
    public rules?: Array<RuleInfo>;
    private 'share_info'?: ShareInfo;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): IpGroupBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IpGroupBody {
        this['name'] = name;
        return this;
    }
    public withIps(ips: string): IpGroupBody {
        this['ips'] = ips;
        return this;
    }
    public withIpRemarks(ipRemarks: { [key: string]: string; }): IpGroupBody {
        this['ip_remarks'] = ipRemarks;
        return this;
    }
    public set ipRemarks(ipRemarks: { [key: string]: string; }  | undefined) {
        this['ip_remarks'] = ipRemarks;
    }
    public get ipRemarks(): { [key: string]: string; } | undefined {
        return this['ip_remarks'];
    }
    public withSize(size: number): IpGroupBody {
        this['size'] = size;
        return this;
    }
    public withRules(rules: Array<RuleInfo>): IpGroupBody {
        this['rules'] = rules;
        return this;
    }
    public withShareInfo(shareInfo: ShareInfo): IpGroupBody {
        this['share_info'] = shareInfo;
        return this;
    }
    public set shareInfo(shareInfo: ShareInfo  | undefined) {
        this['share_info'] = shareInfo;
    }
    public get shareInfo(): ShareInfo | undefined {
        return this['share_info'];
    }
    public withDescription(description: string): IpGroupBody {
        this['description'] = description;
        return this;
    }
}