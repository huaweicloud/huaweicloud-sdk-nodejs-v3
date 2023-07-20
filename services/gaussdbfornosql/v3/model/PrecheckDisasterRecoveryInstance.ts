

export class PrecheckDisasterRecoveryInstance {
    private 'vpc_cidr'?: string;
    private 'spec_code'?: string;
    private 'node_ips'?: Array<string>;
    public constructor(vpcCidr?: string, specCode?: string, nodeIps?: Array<string>) { 
        this['vpc_cidr'] = vpcCidr;
        this['spec_code'] = specCode;
        this['node_ips'] = nodeIps;
    }
    public withVpcCidr(vpcCidr: string): PrecheckDisasterRecoveryInstance {
        this['vpc_cidr'] = vpcCidr;
        return this;
    }
    public set vpcCidr(vpcCidr: string  | undefined) {
        this['vpc_cidr'] = vpcCidr;
    }
    public get vpcCidr(): string | undefined {
        return this['vpc_cidr'];
    }
    public withSpecCode(specCode: string): PrecheckDisasterRecoveryInstance {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withNodeIps(nodeIps: Array<string>): PrecheckDisasterRecoveryInstance {
        this['node_ips'] = nodeIps;
        return this;
    }
    public set nodeIps(nodeIps: Array<string>  | undefined) {
        this['node_ips'] = nodeIps;
    }
    public get nodeIps(): Array<string> | undefined {
        return this['node_ips'];
    }
}