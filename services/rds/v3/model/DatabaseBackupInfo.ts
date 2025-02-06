

export class DatabaseBackupInfo {
    private 'database_name'?: string;
    private 'backup_file_name'?: string;
    private 'backup_file_size'?: number;
    public constructor(databaseName?: string, backupFileName?: string, backupFileSize?: number) { 
        this['database_name'] = databaseName;
        this['backup_file_name'] = backupFileName;
        this['backup_file_size'] = backupFileSize;
    }
    public withDatabaseName(databaseName: string): DatabaseBackupInfo {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withBackupFileName(backupFileName: string): DatabaseBackupInfo {
        this['backup_file_name'] = backupFileName;
        return this;
    }
    public set backupFileName(backupFileName: string  | undefined) {
        this['backup_file_name'] = backupFileName;
    }
    public get backupFileName(): string | undefined {
        return this['backup_file_name'];
    }
    public withBackupFileSize(backupFileSize: number): DatabaseBackupInfo {
        this['backup_file_size'] = backupFileSize;
        return this;
    }
    public set backupFileSize(backupFileSize: number  | undefined) {
        this['backup_file_size'] = backupFileSize;
    }
    public get backupFileSize(): number | undefined {
        return this['backup_file_size'];
    }
}