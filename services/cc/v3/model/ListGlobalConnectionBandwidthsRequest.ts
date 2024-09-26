

export class ListGlobalConnectionBandwidthsRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    public name?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    private 'instance_id'?: Array<string>;
    private 'instance_type'?: Array<ListGlobalConnectionBandwidthsRequestInstanceTypeEnum> | Array<string>;
    private 'binding_service'?: Array<ListGlobalConnectionBandwidthsRequestBindingServiceEnum> | Array<string>;
    public type?: Array<ListGlobalConnectionBandwidthsRequestTypeEnum> | Array<string>;
    private 'admin_state'?: Array<ListGlobalConnectionBandwidthsRequestAdminStateEnum> | Array<string>;
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
    public withInstanceId(instanceId: Array<string>): ListGlobalConnectionBandwidthsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: Array<string>  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): Array<string> | undefined {
        return this['instance_id'];
    }
    public withInstanceType(instanceType: Array<ListGlobalConnectionBandwidthsRequestInstanceTypeEnum> | Array<string>): ListGlobalConnectionBandwidthsRequest {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: Array<ListGlobalConnectionBandwidthsRequestInstanceTypeEnum> | Array<string>  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): Array<ListGlobalConnectionBandwidthsRequestInstanceTypeEnum> | Array<string> | undefined {
        return this['instance_type'];
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
    public withAdminState(adminState: Array<ListGlobalConnectionBandwidthsRequestAdminStateEnum> | Array<string>): ListGlobalConnectionBandwidthsRequest {
        this['admin_state'] = adminState;
        return this;
    }
    public set adminState(adminState: Array<ListGlobalConnectionBandwidthsRequestAdminStateEnum> | Array<string>  | undefined) {
        this['admin_state'] = adminState;
    }
    public get adminState(): Array<ListGlobalConnectionBandwidthsRequestAdminStateEnum> | Array<string> | undefined {
        return this['admin_state'];
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
export enum ListGlobalConnectionBandwidthsRequestInstanceTypeEnum {
    CC = 'CC',
    GEIP = 'GEIP',
    GCN = 'GCN',
    GSN = 'GSN'
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
export enum ListGlobalConnectionBandwidthsRequestAdminStateEnum {
    NORMAL = 'NORMAL',
    FREEZED = 'FREEZED'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGlobalConnectionBandwidthsRequestChargeModeEnum {
    BWD = 'bwd',
    E_95 = '95',
    E_95AVR = '95avr'
}
