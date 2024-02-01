

export class ListGlobalConnectionBandwidthsRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    public name?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    private 'binding_service'?: Array<ListGlobalConnectionBandwidthsRequestBindingServiceEnum> | Array<string>;
    public type?: Array<ListGlobalConnectionBandwidthsRequestTypeEnum> | Array<string>;
    private 'charge_mode'?: Array<ListGlobalConnectionBandwidthsRequestChargeModeEnum> | Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListGlobalConnectionBandwidthsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListGlobalConnectionBandwidthsRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListGlobalConnectionBandwidthsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListGlobalConnectionBandwidthsRequest {
        this['name'] = name;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListGlobalConnectionBandwidthsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withBindingService(bindingService: Array<ListGlobalConnectionBandwidthsRequestBindingServiceEnum> | Array<string>): ListGlobalConnectionBandwidthsRequest {
        this['binding_service'] = bindingService;
        return this;
    }
    public set bindingService(bindingService: Array<ListGlobalConnectionBandwidthsRequestBindingServiceEnum> | Array<string>  | undefined) {
        this['binding_service'] = bindingService;
    }
    public get bindingService(): Array<ListGlobalConnectionBandwidthsRequestBindingServiceEnum> | Array<string> | undefined {
        return this['binding_service'];
    }
    public withType(type: Array<ListGlobalConnectionBandwidthsRequestTypeEnum> | Array<string>): ListGlobalConnectionBandwidthsRequest {
        this['type'] = type;
        return this;
    }
    public withChargeMode(chargeMode: Array<ListGlobalConnectionBandwidthsRequestChargeModeEnum> | Array<string>): ListGlobalConnectionBandwidthsRequest {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: Array<ListGlobalConnectionBandwidthsRequestChargeModeEnum> | Array<string>  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): Array<ListGlobalConnectionBandwidthsRequestChargeModeEnum> | Array<string> | undefined {
        return this['charge_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGlobalConnectionBandwidthsRequestBindingServiceEnum {
    CC = 'CC',
    GEIP = 'GEIP',
    GCN = 'GCN',
    GSN = 'GSN'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGlobalConnectionBandwidthsRequestTypeEnum {
    TRSAREA = 'TrsArea',
    AREA = 'Area',
    SUBAREA = 'SubArea',
    REGION = 'Region'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGlobalConnectionBandwidthsRequestChargeModeEnum {
    BWD = 'bwd',
    E_95 = '95'
}
