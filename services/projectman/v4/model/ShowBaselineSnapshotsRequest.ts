

export class ShowBaselineSnapshotsRequest {
    private 'project_id'?: string;
    private 'snapshot_version_id'?: string;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowBaselineSnapshotsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSnapshotVersionId(snapshotVersionId: string): ShowBaselineSnapshotsRequest {
        this['snapshot_version_id'] = snapshotVersionId;
        return this;
    }
    public set snapshotVersionId(snapshotVersionId: string  | undefined) {
        this['snapshot_version_id'] = snapshotVersionId;
    }
    public get snapshotVersionId(): string | undefined {
        return this['snapshot_version_id'];
    }
}