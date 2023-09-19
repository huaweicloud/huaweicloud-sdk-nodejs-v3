

export class ListInterRegionBandwidthsRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    private 'cloud_connection_id'?: Array<string>;
    private 'bandwidth_package_id'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListInterRegionBandwidthsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListInterRegionBandwidthsRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListInterRegionBandwidthsRequest {
        this['id'] = id;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListInterRegionBandwidthsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withCloudConnectionId(cloudConnectionId: Array<string>): ListInterRegionBandwidthsRequest {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: Array<string>  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): Array<string> | undefined {
        return this['cloud_connection_id'];
    }
    public withBandwidthPackageId(bandwidthPackageId: Array<string>): ListInterRegionBandwidthsRequest {
        this['bandwidth_package_id'] = bandwidthPackageId;
        return this;
    }
    public set bandwidthPackageId(bandwidthPackageId: Array<string>  | undefined) {
        this['bandwidth_package_id'] = bandwidthPackageId;
    }
    public get bandwidthPackageId(): Array<string> | undefined {
        return this['bandwidth_package_id'];
    }
}