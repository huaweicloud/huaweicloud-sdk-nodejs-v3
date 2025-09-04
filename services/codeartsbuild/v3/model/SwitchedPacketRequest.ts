

export class SwitchedPacketRequest {
    private 'project_id'?: string;
    private 'source_group_id'?: string;
    private 'target_group_id'?: string;
    public constructor(projectId?: string, sourceGroupId?: string, targetGroupId?: string) { 
        this['project_id'] = projectId;
        this['source_group_id'] = sourceGroupId;
        this['target_group_id'] = targetGroupId;
    }
    public withProjectId(projectId: string): SwitchedPacketRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSourceGroupId(sourceGroupId: string): SwitchedPacketRequest {
        this['source_group_id'] = sourceGroupId;
        return this;
    }
    public set sourceGroupId(sourceGroupId: string  | undefined) {
        this['source_group_id'] = sourceGroupId;
    }
    public get sourceGroupId(): string | undefined {
        return this['source_group_id'];
    }
    public withTargetGroupId(targetGroupId: string): SwitchedPacketRequest {
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