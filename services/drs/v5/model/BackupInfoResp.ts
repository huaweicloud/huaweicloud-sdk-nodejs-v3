import { BackupFileResp } from './BackupFileResp';


export class BackupInfoResp {
    private 'file_source'?: string;
    private 'bucket_name'?: string;
    private 'file_info'?: Array<BackupFileResp>;
    public constructor() { 
    }
    public withFileSource(fileSource: string): BackupInfoResp {
        this['file_source'] = fileSource;
        return this;
    }
    public set fileSource(fileSource: string  | undefined) {
        this['file_source'] = fileSource;
    }
    public get fileSource(): string | undefined {
        return this['file_source'];
    }
    public withBucketName(bucketName: string): BackupInfoResp {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withFileInfo(fileInfo: Array<BackupFileResp>): BackupInfoResp {
        this['file_info'] = fileInfo;
        return this;
    }
    public set fileInfo(fileInfo: Array<BackupFileResp>  | undefined) {
        this['file_info'] = fileInfo;
    }
    public get fileInfo(): Array<BackupFileResp> | undefined {
        return this['file_info'];
    }
}