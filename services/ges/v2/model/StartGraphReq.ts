

export class StartGraphReq {
    private 'graph_backup_id'?: string;
    public constructor() { 
    }
    public withGraphBackupId(graphBackupId: string): StartGraphReq {
        this['graph_backup_id'] = graphBackupId;
        return this;
    }
    public set graphBackupId(graphBackupId: string  | undefined) {
        this['graph_backup_id'] = graphBackupId;
    }
    public get graphBackupId(): string | undefined {
        return this['graph_backup_id'];
    }
}