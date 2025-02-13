

export class DeleteVpcEgressRequest {
    private 'vpc_egress_id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    private 'X-Environment-ID'?: string;
    public constructor(vpcEgressId?: string, xEnvironmentID?: string) { 
        this['vpc_egress_id'] = vpcEgressId;
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public withVpcEgressId(vpcEgressId: string): DeleteVpcEgressRequest {
        this['vpc_egress_id'] = vpcEgressId;
        return this;
    }
    public set vpcEgressId(vpcEgressId: string  | undefined) {
        this['vpc_egress_id'] = vpcEgressId;
    }
    public get vpcEgressId(): string | undefined {
        return this['vpc_egress_id'];
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): DeleteVpcEgressRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEnvironmentID(xEnvironmentID: string): DeleteVpcEgressRequest {
        this['X-Environment-ID'] = xEnvironmentID;
        return this;
    }
    public set xEnvironmentID(xEnvironmentID: string  | undefined) {
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public get xEnvironmentID(): string | undefined {
        return this['X-Environment-ID'];
    }
}