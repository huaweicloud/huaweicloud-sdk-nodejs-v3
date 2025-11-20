

export class RelatedDnVO {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'instance_status'?: string;
    private 'data_volume_size'?: number;
    public version?: string;
    private 'engine_name'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): RelatedDnVO {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): RelatedDnVO {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceStatus(instanceStatus: string): RelatedDnVO {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withDataVolumeSize(dataVolumeSize: number): RelatedDnVO {
        this['data_volume_size'] = dataVolumeSize;
        return this;
    }
    public set dataVolumeSize(dataVolumeSize: number  | undefined) {
        this['data_volume_size'] = dataVolumeSize;
    }
    public get dataVolumeSize(): number | undefined {
        return this['data_volume_size'];
    }
    public withVersion(version: string): RelatedDnVO {
        this['version'] = version;
        return this;
    }
    public withEngineName(engineName: string): RelatedDnVO {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
}