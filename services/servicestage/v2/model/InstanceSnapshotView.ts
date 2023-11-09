

export class InstanceSnapshotView {
    private 'create_time'?: number;
    public description?: string;
    private 'instance_id'?: string;
    public version?: string;
    public constructor() { 
    }
    public withCreateTime(createTime: number): InstanceSnapshotView {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDescription(description: string): InstanceSnapshotView {
        this['description'] = description;
        return this;
    }
    public withInstanceId(instanceId: string): InstanceSnapshotView {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVersion(version: string): InstanceSnapshotView {
        this['version'] = version;
        return this;
    }
}