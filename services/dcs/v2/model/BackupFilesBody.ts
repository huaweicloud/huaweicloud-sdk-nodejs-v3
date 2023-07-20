import { Files } from './Files';


export class BackupFilesBody {
    private 'file_source'?: BackupFilesBodyFileSourceEnum | string;
    private 'bucket_name'?: string;
    public files?: Array<Files>;
    private 'backup_id'?: string;
    public constructor(bucketName?: string, files?: Array<Files>) { 
        this['bucket_name'] = bucketName;
        this['files'] = files;
    }
    public withFileSource(fileSource: BackupFilesBodyFileSourceEnum | string): BackupFilesBody {
        this['file_source'] = fileSource;
        return this;
    }
    public set fileSource(fileSource: BackupFilesBodyFileSourceEnum | string  | undefined) {
        this['file_source'] = fileSource;
    }
    public get fileSource(): BackupFilesBodyFileSourceEnum | string | undefined {
        return this['file_source'];
    }
    public withBucketName(bucketName: string): BackupFilesBody {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withFiles(files: Array<Files>): BackupFilesBody {
        this['files'] = files;
        return this;
    }
    public withBackupId(backupId: string): BackupFilesBody {
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

/**
    * @export
    * @enum {string}
    */
export enum BackupFilesBodyFileSourceEnum {
    SELF_BUILD_OBS = 'self_build_obs',
    BACKUP_RECORD = 'backup_record'
}
