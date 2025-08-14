

export class ListSupportBindingConnectionBandwidthsRequest {
    public limit?: number;
    public marker?: string;
    private 'enterprise_project_id'?: Array<string>;
    private 'local_area'?: string;
    private 'remote_area'?: string;
    private 'binding_service'?: ListSupportBindingConnectionBandwidthsRequestBindingServiceEnum | string;
    public constructor(bindingService?: string) { 
        this['binding_service'] = bindingService;
    }
    public withLimit(limit: number): ListSupportBindingConnectionBandwidthsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSupportBindingConnectionBandwidthsRequest {
        this['marker'] = marker;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListSupportBindingConnectionBandwidthsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withLocalArea(localArea: string): ListSupportBindingConnectionBandwidthsRequest {
        this['local_area'] = localArea;
        return this;
    }
    public set localArea(localArea: string  | undefined) {
        this['local_area'] = localArea;
    }
    public get localArea(): string | undefined {
        return this['local_area'];
    }
    public withRemoteArea(remoteArea: string): ListSupportBindingConnectionBandwidthsRequest {
        this['remote_area'] = remoteArea;
        return this;
    }
    public set remoteArea(remoteArea: string  | undefined) {
        this['remote_area'] = remoteArea;
    }
    public get remoteArea(): string | undefined {
        return this['remote_area'];
    }
    public withBindingService(bindingService: ListSupportBindingConnectionBandwidthsRequestBindingServiceEnum | string): ListSupportBindingConnectionBandwidthsRequest {
        this['binding_service'] = bindingService;
        return this;
    }
    public set bindingService(bindingService: ListSupportBindingConnectionBandwidthsRequestBindingServiceEnum | string  | undefined) {
        this['binding_service'] = bindingService;
    }
    public get bindingService(): ListSupportBindingConnectionBandwidthsRequestBindingServiceEnum | string | undefined {
        return this['binding_service'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSupportBindingConnectionBandwidthsRequestBindingServiceEnum {
    CC = 'CC',
    GEIP = 'GEIP',
    GCN = 'GCN',
    GSN = 'GSN'
}
