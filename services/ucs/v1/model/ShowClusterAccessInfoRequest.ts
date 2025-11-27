

export class ShowClusterAccessInfoRequest {
    public clusterid?: string;
    public vpcendpoint?: string;
    public region?: string;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): ShowClusterAccessInfoRequest {
        this['clusterid'] = clusterid;
        return this;
    }
    public withVpcendpoint(vpcendpoint: string): ShowClusterAccessInfoRequest {
        this['vpcendpoint'] = vpcendpoint;
        return this;
    }
    public withRegion(region: string): ShowClusterAccessInfoRequest {
        this['region'] = region;
        return this;
    }
}