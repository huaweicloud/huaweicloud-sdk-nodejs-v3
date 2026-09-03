

export class CreateBinlogTaskRequestBody {
    private 'binlog_type'?: string;
    private 'file_name'?: string;
    private 'backup_id'?: string;
    public constructor(binlogType?: string, fileName?: string) { 
        this['binlog_type'] = binlogType;
        this['file_name'] = fileName;
    }
    public withBinlogType(binlogType: string): CreateBinlogTaskRequestBody {
        this['binlog_type'] = binlogType;
        return this;
    }
    public set binlogType(binlogType: string  | undefined) {
        this['binlog_type'] = binlogType;
    }
    public get binlogType(): string | undefined {
        return this['binlog_type'];
    }
    public withFileName(fileName: string): CreateBinlogTaskRequestBody {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withBackupId(backupId: string): CreateBinlogTaskRequestBody {
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