

export class ShowAvalibleRdsRequest {
    private 'instance_id'?: string;
    private 'target_instance_id'?: string;
    private 'source_dn_instance_id'?: string;
    private 'restore_time'?: string;
    public constructor(instanceId?: string, targetInstanceId?: string, sourceDnInstanceId?: string, restoreTime?: string) { 
        this['instance_id'] = instanceId;
        this['target_instance_id'] = targetInstanceId;
        this['source_dn_instance_id'] = sourceDnInstanceId;
        this['restore_time'] = restoreTime;
    }
    public withInstanceId(instanceId: string): ShowAvalibleRdsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTargetInstanceId(targetInstanceId: string): ShowAvalibleRdsRequest {
        this['target_instance_id'] = targetInstanceId;
        return this;
    }
    public set targetInstanceId(targetInstanceId: string  | undefined) {
        this['target_instance_id'] = targetInstanceId;
    }
    public get targetInstanceId(): string | undefined {
        return this['target_instance_id'];
    }
    public withSourceDnInstanceId(sourceDnInstanceId: string): ShowAvalibleRdsRequest {
        this['source_dn_instance_id'] = sourceDnInstanceId;
        return this;
    }
    public set sourceDnInstanceId(sourceDnInstanceId: string  | undefined) {
        this['source_dn_instance_id'] = sourceDnInstanceId;
    }
    public get sourceDnInstanceId(): string | undefined {
        return this['source_dn_instance_id'];
    }
    public withRestoreTime(restoreTime: string): ShowAvalibleRdsRequest {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: string  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): string | undefined {
        return this['restore_time'];
    }
}