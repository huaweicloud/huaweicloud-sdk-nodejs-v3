import { CreateDaemonsetRequestBodyScheduleInfo } from './CreateDaemonsetRequestBodyScheduleInfo';
import { RuntimeRequestBody } from './RuntimeRequestBody';


export class UpdateDaemonsetRequestBody {
    private 'agent_version'?: string;
    private 'cluster_name'?: string;
    private 'auto_upgrade'?: boolean;
    private 'runtime_info'?: Array<RuntimeRequestBody>;
    private 'schedule_info'?: CreateDaemonsetRequestBodyScheduleInfo;
    private 'invoked_service'?: string;
    private 'charging_mode'?: UpdateDaemonsetRequestBodyChargingModeEnum | string;
    private 'cce_protection_type'?: UpdateDaemonsetRequestBodyCceProtectionTypeEnum | string;
    private 'prefer_packet_cycle'?: boolean;
    public constructor() { 
    }
    public withAgentVersion(agentVersion: string): UpdateDaemonsetRequestBody {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withClusterName(clusterName: string): UpdateDaemonsetRequestBody {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withAutoUpgrade(autoUpgrade: boolean): UpdateDaemonsetRequestBody {
        this['auto_upgrade'] = autoUpgrade;
        return this;
    }
    public set autoUpgrade(autoUpgrade: boolean  | undefined) {
        this['auto_upgrade'] = autoUpgrade;
    }
    public get autoUpgrade(): boolean | undefined {
        return this['auto_upgrade'];
    }
    public withRuntimeInfo(runtimeInfo: Array<RuntimeRequestBody>): UpdateDaemonsetRequestBody {
        this['runtime_info'] = runtimeInfo;
        return this;
    }
    public set runtimeInfo(runtimeInfo: Array<RuntimeRequestBody>  | undefined) {
        this['runtime_info'] = runtimeInfo;
    }
    public get runtimeInfo(): Array<RuntimeRequestBody> | undefined {
        return this['runtime_info'];
    }
    public withScheduleInfo(scheduleInfo: CreateDaemonsetRequestBodyScheduleInfo): UpdateDaemonsetRequestBody {
        this['schedule_info'] = scheduleInfo;
        return this;
    }
    public set scheduleInfo(scheduleInfo: CreateDaemonsetRequestBodyScheduleInfo  | undefined) {
        this['schedule_info'] = scheduleInfo;
    }
    public get scheduleInfo(): CreateDaemonsetRequestBodyScheduleInfo | undefined {
        return this['schedule_info'];
    }
    public withInvokedService(invokedService: string): UpdateDaemonsetRequestBody {
        this['invoked_service'] = invokedService;
        return this;
    }
    public set invokedService(invokedService: string  | undefined) {
        this['invoked_service'] = invokedService;
    }
    public get invokedService(): string | undefined {
        return this['invoked_service'];
    }
    public withChargingMode(chargingMode: UpdateDaemonsetRequestBodyChargingModeEnum | string): UpdateDaemonsetRequestBody {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: UpdateDaemonsetRequestBodyChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): UpdateDaemonsetRequestBodyChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withCceProtectionType(cceProtectionType: UpdateDaemonsetRequestBodyCceProtectionTypeEnum | string): UpdateDaemonsetRequestBody {
        this['cce_protection_type'] = cceProtectionType;
        return this;
    }
    public set cceProtectionType(cceProtectionType: UpdateDaemonsetRequestBodyCceProtectionTypeEnum | string  | undefined) {
        this['cce_protection_type'] = cceProtectionType;
    }
    public get cceProtectionType(): UpdateDaemonsetRequestBodyCceProtectionTypeEnum | string | undefined {
        return this['cce_protection_type'];
    }
    public withPreferPacketCycle(preferPacketCycle: boolean): UpdateDaemonsetRequestBody {
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
export enum UpdateDaemonsetRequestBodyChargingModeEnum {
    ON_DEMAND = 'on_demand',
    FREE_SECURITY_CHECK = 'free_security_check'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateDaemonsetRequestBodyCceProtectionTypeEnum {
    CLUSTER_LEVEL = 'cluster_level',
    NODE_LEVEL = 'node_level'
}
