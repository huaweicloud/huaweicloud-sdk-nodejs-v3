import { BackupFileInfo } from './BackupFileInfo';


export class BackupInfo {
    private 'file_source'?: BackupInfoFileSourceEnum | string;
    private 'bucket_name'?: string;
    public files?: Array<BackupFileInfo>;
    public constructor(fileSource?: string, files?: Array<BackupFileInfo>) { 
        this['file_source'] = fileSource;
        this['files'] = files;
    }
    public withFileSource(fileSource: BackupInfoFileSourceEnum | string): BackupInfo {
        this['file_source'] = fileSource;
        return this;
    }
    public set fileSource(fileSource: BackupInfoFileSourceEnum | string  | undefined) {
        this['file_source'] = fileSource;
    }
    public get fileSource(): BackupInfoFileSourceEnum | string | undefined {
        return this['file_source'];
    }
    public withBucketName(bucketName: string): BackupInfo {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withFiles(files: Array<BackupFileInfo>): BackupInfo {
        this['files'] = files;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackupInfoFileSourceEnum {
    OBS = 'OBS',
    RDS = 'RDS'
}
