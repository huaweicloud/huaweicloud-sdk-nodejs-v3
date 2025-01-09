

export class ListSubnetBandwidthsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'bandwidth_id'?: string;
    private 'bandwidth_name'?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSubnetBandwidthsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListSubnetBandwidthsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSubnetBandwidthsRequest {
        this['limit'] = limit;
        return this;
    }
    public withVpcId(vpcId: string): ListSubnetBandwidthsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ListSubnetBandwidthsRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withBandwidthId(bandwidthId: string): ListSubnetBandwidthsRequest {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string  | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId(): string | undefined {
        return this['bandwidth_id'];
    }
    public withBandwidthName(bandwidthName: string): ListSubnetBandwidthsRequest {
        this['bandwidth_name'] = bandwidthName;
        return this;
    }
    public set bandwidthName(bandwidthName: string  | undefined) {
        this['bandwidth_name'] = bandwidthName;
    }
    public get bandwidthName(): string | undefined {
        return this['bandwidth_name'];
    }
}