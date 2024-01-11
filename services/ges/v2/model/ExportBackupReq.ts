

export class ExportBackupReq {
    private 'backup_id'?: string;
    private 'export_path'?: string;
    public constructor(backupId?: string, exportPath?: string) { 
        this['backup_id'] = backupId;
        this['export_path'] = exportPath;
    }
    public withBackupId(backupId: string): ExportBackupReq {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withExportPath(exportPath: string): ExportBackupReq {
        this['export_path'] = exportPath;
        return this;
    }
    public set exportPath(exportPath: string  | undefined) {
        this['export_path'] = exportPath;
    }
    public get exportPath(): string | undefined {
        return this['export_path'];
    }
}