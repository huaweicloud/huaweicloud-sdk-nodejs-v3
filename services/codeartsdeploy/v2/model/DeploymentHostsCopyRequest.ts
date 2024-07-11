

export class DeploymentHostsCopyRequest {
    private 'host_uuids'?: Array<string>;
    private 'target_group_id'?: string;
    public constructor(hostUuids?: Array<string>, targetGroupId?: string) { 
        this['host_uuids'] = hostUuids;
        this['target_group_id'] = targetGroupId;
    }
    public withHostUuids(hostUuids: Array<string>): DeploymentHostsCopyRequest {
        this['host_uuids'] = hostUuids;
        return this;
    }
    public set hostUuids(hostUuids: Array<string>  | undefined) {
        this['host_uuids'] = hostUuids;
    }
    public get hostUuids(): Array<string> | undefined {
        return this['host_uuids'];
    }
    public withTargetGroupId(targetGroupId: string): DeploymentHostsCopyRequest {
        this['target_group_id'] = targetGroupId;
        return this;
    }
    public set targetGroupId(targetGroupId: string  | undefined) {
        this['target_group_id'] = targetGroupId;
    }
    public get targetGroupId(): string | undefined {
        return this['target_group_id'];
    }
}