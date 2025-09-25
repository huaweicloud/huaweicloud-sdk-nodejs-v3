

export class StartVpecpReq {
    private 'endpoint_with_dns_name'?: boolean;
    private 'profession_vpcep'?: boolean;
    private 'dualstack_enable'?: boolean;
    public constructor() { 
    }
    public withEndpointWithDnsName(endpointWithDnsName: boolean): StartVpecpReq {
        this['endpoint_with_dns_name'] = endpointWithDnsName;
        return this;
    }
    public set endpointWithDnsName(endpointWithDnsName: boolean  | undefined) {
        this['endpoint_with_dns_name'] = endpointWithDnsName;
    }
    public get endpointWithDnsName(): boolean | undefined {
        return this['endpoint_with_dns_name'];
    }
    public withProfessionVpcep(professionVpcep: boolean): StartVpecpReq {
        this['profession_vpcep'] = professionVpcep;
        return this;
    }
    public set professionVpcep(professionVpcep: boolean  | undefined) {
        this['profession_vpcep'] = professionVpcep;
    }
    public get professionVpcep(): boolean | undefined {
        return this['profession_vpcep'];
    }
    public withDualstackEnable(dualstackEnable: boolean): StartVpecpReq {
        this['dualstack_enable'] = dualstackEnable;
        return this;
    }
    public set dualstackEnable(dualstackEnable: boolean  | undefined) {
        this['dualstack_enable'] = dualstackEnable;
    }
    public get dualstackEnable(): boolean | undefined {
        return this['dualstack_enable'];
    }
}