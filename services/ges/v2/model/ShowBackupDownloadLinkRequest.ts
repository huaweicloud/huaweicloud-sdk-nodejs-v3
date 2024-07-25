

export class ShowBackupDownloadLinkRequest {
    private 'graph_id'?: string;
    private 'backup_id'?: string;
    public constructor(graphId?: string, backupId?: string) { 
        this['graph_id'] = graphId;
        this['backup_id'] = backupId;
    }
    public withGraphId(graphId: string): ShowBackupDownloadLinkRequest {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string  | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId(): string | undefined {
        return this['graph_id'];
    }
    public withBackupId(backupId: string): ShowBackupDownloadLinkRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
}