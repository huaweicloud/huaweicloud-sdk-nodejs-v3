

export class ListBandwidthPackagesRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    public name?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    private 'cloud_connection_id'?: Array<string>;
    public status?: Array<ListBandwidthPackagesRequestStatusEnum> | Array<string>;
    private 'billing_mode'?: Array<string>;
    private 'resource_id'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListBandwidthPackagesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListBandwidthPackagesRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListBandwidthPackagesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListBandwidthPackagesRequest {
        this['name'] = name;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListBandwidthPackagesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withCloudConnectionId(cloudConnectionId: Array<string>): ListBandwidthPackagesRequest {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: Array<string>  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): Array<string> | undefined {
        return this['cloud_connection_id'];
    }
    public withStatus(status: Array<ListBandwidthPackagesRequestStatusEnum> | Array<string>): ListBandwidthPackagesRequest {
        this['status'] = status;
        return this;
    }
    public withBillingMode(billingMode: Array<string>): ListBandwidthPackagesRequest {
        this['billing_mode'] = billingMode;
        return this;
    }
    public set billingMode(billingMode: Array<string>  | undefined) {
        this['billing_mode'] = billingMode;
    }
    public get billingMode(): Array<string> | undefined {
        return this['billing_mode'];
    }
    public withResourceId(resourceId: Array<string>): ListBandwidthPackagesRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: Array<string>  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): Array<string> | undefined {
        return this['resource_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListBandwidthPackagesRequestStatusEnum {
    ACTIVE = 'ACTIVE'
}
