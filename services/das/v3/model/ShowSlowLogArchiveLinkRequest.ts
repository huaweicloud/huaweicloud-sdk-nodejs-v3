

export class ShowSlowLogArchiveLinkRequest {
    private 'instance_id'?: string;
    private 'archive_id'?: number;
    public constructor(instanceId?: string, archiveId?: number) { 
        this['instance_id'] = instanceId;
        this['archive_id'] = archiveId;
    }
    public withInstanceId(instanceId: string): ShowSlowLogArchiveLinkRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withArchiveId(archiveId: number): ShowSlowLogArchiveLinkRequest {
        this['archive_id'] = archiveId;
        return this;
    }
    public set archiveId(archiveId: number  | undefined) {
        this['archive_id'] = archiveId;
    }
    public get archiveId(): number | undefined {
        return this['archive_id'];
    }
}