

export class CceIntegrationProtectionRequestBody {
    private 'cluster_type'?: CceIntegrationProtectionRequestBodyClusterTypeEnum | string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'charging_mode'?: CceIntegrationProtectionRequestBodyChargingModeEnum | string;
    private 'cce_protection_type'?: CceIntegrationProtectionRequestBodyCceProtectionTypeEnum | string;
    private 'prefer_packet_cycle'?: boolean;
    public constructor(clusterName?: string) { 
        this['cluster_name'] = clusterName;
    }
    public withClusterType(clusterType: CceIntegrationProtectionRequestBodyClusterTypeEnum | string): CceIntegrationProtectionRequestBody {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: CceIntegrationProtectionRequestBodyClusterTypeEnum | string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): CceIntegrationProtectionRequestBodyClusterTypeEnum | string | undefined {
        return this['cluster_type'];
    }
    public withClusterId(clusterId: string): CceIntegrationProtectionRequestBody {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): CceIntegrationProtectionRequestBody {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withChargingMode(chargingMode: CceIntegrationProtectionRequestBodyChargingModeEnum | string): CceIntegrationProtectionRequestBody {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: CceIntegrationProtectionRequestBodyChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): CceIntegrationProtectionRequestBodyChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withCceProtectionType(cceProtectionType: CceIntegrationProtectionRequestBodyCceProtectionTypeEnum | string): CceIntegrationProtectionRequestBody {
        this['cce_protection_type'] = cceProtectionType;
        return this;
    }
    public set cceProtectionType(cceProtectionType: CceIntegrationProtectionRequestBodyCceProtectionTypeEnum | string  | undefined) {
        this['cce_protection_type'] = cceProtectionType;
    }
    public get cceProtectionType(): CceIntegrationProtectionRequestBodyCceProtectionTypeEnum | string | undefined {
        return this['cce_protection_type'];
    }
    public withPreferPacketCycle(preferPacketCycle: boolean): CceIntegrationProtectionRequestBody {
        this['prefer_packet_cycle'] = preferPacketCycle;
        return this;
    }
    public set preferPacketCycle(preferPacketCycle: boolean  | undefined) {
        this['prefer_packet_cycle'] = preferPacketCycle;
    }
    public get preferPacketCycle(): boolean | undefined {
        return this['prefer_packet_cycle'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CceIntegrationProtectionRequestBodyClusterTypeEnum {
    EXISTING = 'existing',
    ADDING = 'adding'
}
/**
    * @export
    * @enum {string}
    */
export enum CceIntegrationProtectionRequestBodyChargingModeEnum {
    ON_DEMAND = 'on_demand',
    FREE_SECURITY_CHECK = 'free_security_check'
}
/**
    * @export
    * @enum {string}
    */
export enum CceIntegrationProtectionRequestBodyCceProtectionTypeEnum {
    CLUSTER_LEVEL = 'cluster_level',
    NODE_LEVEL = 'node_level'
}
