

export class AdditionalBackupRequest {
    private 'is_additional_backup'?: boolean;
    private 'node_id'?: string;
    public constructor() { 
    }
    public withIsAdditionalBackup(isAdditionalBackup: boolean): AdditionalBackupRequest {
        this['is_additional_backup'] = isAdditionalBackup;
        return this;
    }
    public set isAdditionalBackup(isAdditionalBackup: boolean  | undefined) {
        this['is_additional_backup'] = isAdditionalBackup;
    }
    public get isAdditionalBackup(): boolean | undefined {
        return this['is_additional_backup'];
    }
    public withNodeId(nodeId: string): AdditionalBackupRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
}