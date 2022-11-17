import { Files } from './Files';


export class BackupFilesBody {
    private 'file_source'?: BackupFilesBodyFileSourceEnum | undefined;
    private 'bucket_name': string | undefined;
    public files: Array<Files>;
    private 'backup_id'?: string | undefined;
    public constructor(bucketName?: any, files?: any) { 
        this['bucket_name'] = bucketName;
        this['files'] = files;
    }
    public withFileSource(fileSource: BackupFilesBodyFileSourceEnum): BackupFilesBody {
        this['file_source'] = fileSource;
        return this;
    }
    public set fileSource(fileSource: BackupFilesBodyFileSourceEnum | undefined) {
        this['file_source'] = fileSource;
    }
    public get fileSource() {
        return this['file_source'];
    }
    public withBucketName(bucketName: string): BackupFilesBody {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName() {
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
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackupFilesBodyFileSourceEnum {
    SELF_BUILD_OBS = 'self_build_obs'
}
