

export class CreateIpGroupRequestBody {
    public name?: string;
    public ips?: string;
    private 'ip_remarks'?: { [key: string]: string; };
    public description?: string;
    public constructor(name?: string, ips?: string) { 
        this['name'] = name;
        this['ips'] = ips;
    }
    public withName(name: string): CreateIpGroupRequestBody {
        this['name'] = name;
        return this;
    }
    public withIps(ips: string): CreateIpGroupRequestBody {
        this['ips'] = ips;
        return this;
    }
    public withIpRemarks(ipRemarks: { [key: string]: string; }): CreateIpGroupRequestBody {
        this['ip_remarks'] = ipRemarks;
        return this;
    }
    public set ipRemarks(ipRemarks: { [key: string]: string; }  | undefined) {
        this['ip_remarks'] = ipRemarks;
    }
    public get ipRemarks(): { [key: string]: string; } | undefined {
        return this['ip_remarks'];
    }
    public withDescription(description: string): CreateIpGroupRequestBody {
        this['description'] = description;
        return this;
    }
}