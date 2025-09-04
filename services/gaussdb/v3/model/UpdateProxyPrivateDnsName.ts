

export class UpdateProxyPrivateDnsName {
    private 'new_dns_name'?: string;
    private 'vpc_id'?: string;
    public constructor(newDnsName?: string, vpcId?: string) { 
        this['new_dns_name'] = newDnsName;
        this['vpc_id'] = vpcId;
    }
    public withNewDnsName(newDnsName: string): UpdateProxyPrivateDnsName {
        this['new_dns_name'] = newDnsName;
        return this;
    }
    public set newDnsName(newDnsName: string  | undefined) {
        this['new_dns_name'] = newDnsName;
    }
    public get newDnsName(): string | undefined {
        return this['new_dns_name'];
    }
    public withVpcId(vpcId: string): UpdateProxyPrivateDnsName {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
}