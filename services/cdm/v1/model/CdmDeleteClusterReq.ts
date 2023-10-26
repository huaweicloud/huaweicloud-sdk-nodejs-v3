

export class CdmDeleteClusterReq {
    private 'keep_last_manual_backup'?: number;
    public constructor(keepLastManualBackup?: number) { 
        this['keep_last_manual_backup'] = keepLastManualBackup;
    }
    public withKeepLastManualBackup(keepLastManualBackup: number): CdmDeleteClusterReq {
        this['keep_last_manual_backup'] = keepLastManualBackup;
        return this;
    }
    public set keepLastManualBackup(keepLastManualBackup: number  | undefined) {
        this['keep_last_manual_backup'] = keepLastManualBackup;
    }
    public get keepLastManualBackup(): number | undefined {
        return this['keep_last_manual_backup'];
    }
}