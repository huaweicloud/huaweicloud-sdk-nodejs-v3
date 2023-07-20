

export class ConstructDisasterRecoveryInstance {
    public id?: string;
    private 'region_code'?: string;
    private 'subnet_cidrs'?: Array<string>;
    private 'node_ips'?: Array<string>;
    public constructor(id?: string, regionCode?: string, subnetCidrs?: Array<string>, nodeIps?: Array<string>) { 
        this['id'] = id;
        this['region_code'] = regionCode;
        this['subnet_cidrs'] = subnetCidrs;
        this['node_ips'] = nodeIps;
    }
    public withId(id: string): ConstructDisasterRecoveryInstance {
        this['id'] = id;
        return this;
    }
    public withRegionCode(regionCode: string): ConstructDisasterRecoveryInstance {
        this['region_code'] = regionCode;
        return this;
    }
    public set regionCode(regionCode: string  | undefined) {
        this['region_code'] = regionCode;
    }
    public get regionCode(): string | undefined {
        return this['region_code'];
    }
    public withSubnetCidrs(subnetCidrs: Array<string>): ConstructDisasterRecoveryInstance {
        this['subnet_cidrs'] = subnetCidrs;
        return this;
    }
    public set subnetCidrs(subnetCidrs: Array<string>  | undefined) {
        this['subnet_cidrs'] = subnetCidrs;
    }
    public get subnetCidrs(): Array<string> | undefined {
        return this['subnet_cidrs'];
    }
    public withNodeIps(nodeIps: Array<string>): ConstructDisasterRecoveryInstance {
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