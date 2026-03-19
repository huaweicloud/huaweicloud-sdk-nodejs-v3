

export class UpdateIpGroupRequestBody {
    public name?: string;
    public ips?: string;
    private 'ip_remarks'?: { [key: string]: string; };
    public description?: string;
    public constructor(ips?: string) { 
        this['ips'] = ips;
    }
    public withName(name: string): UpdateIpGroupRequestBody {
        this['name'] = name;
        return this;
    }
    public withIps(ips: string): UpdateIpGroupRequestBody {
        this['ips'] = ips;
        return this;
    }
    public withIpRemarks(ipRemarks: { [key: string]: string; }): UpdateIpGroupRequestBody {
        this['ip_remarks'] = ipRemarks;
        return this;
    }
    public set ipRemarks(ipRemarks: { [key: string]: string; }  | undefined) {
        this['ip_remarks'] = ipRemarks;
    }
    public get ipRemarks(): { [key: string]: string; } | undefined {
        return this['ip_remarks'];
    }
    public withDescription(description: string): UpdateIpGroupRequestBody {
        this['description'] = description;
        return this;
    }
}