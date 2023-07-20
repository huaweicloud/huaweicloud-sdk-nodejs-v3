

export class InstancesResult {
    private 'instance_name'?: string;
    private 'instance_id'?: string;
    private 'volume_type'?: string;
    private 'data_volume_size'?: number;
    public version?: number;
    public mode?: InstancesResultModeEnum | string;
    private 'instance_mode'?: InstancesResultInstanceModeEnum | string;
    public constructor() { 
    }
    public withInstanceName(instanceName: string): InstancesResult {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceId(instanceId: string): InstancesResult {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVolumeType(volumeType: string): InstancesResult {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withDataVolumeSize(dataVolumeSize: number): InstancesResult {
        this['data_volume_size'] = dataVolumeSize;
        return this;
    }
    public set dataVolumeSize(dataVolumeSize: number  | undefined) {
        this['data_volume_size'] = dataVolumeSize;
    }
    public get dataVolumeSize(): number | undefined {
        return this['data_volume_size'];
    }
    public withVersion(version: number): InstancesResult {
        this['version'] = version;
        return this;
    }
    public withMode(mode: InstancesResultModeEnum | string): InstancesResult {
        this['mode'] = mode;
        return this;
    }
    public withInstanceMode(instanceMode: InstancesResultInstanceModeEnum | string): InstancesResult {
        this['instance_mode'] = instanceMode;
        return this;
    }
    public set instanceMode(instanceMode: InstancesResultInstanceModeEnum | string  | undefined) {
        this['instance_mode'] = instanceMode;
    }
    public get instanceMode(): InstancesResultInstanceModeEnum | string | undefined {
        return this['instance_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InstancesResultModeEnum {
    HA = 'Ha',
    INDEPENDENT = 'Independent'
}
/**
    * @export
    * @enum {string}
    */
export enum InstancesResultInstanceModeEnum {
    ENTERPRISE = 'enterprise',
    STANDARD = 'standard',
    BASIC = 'basic'
}
