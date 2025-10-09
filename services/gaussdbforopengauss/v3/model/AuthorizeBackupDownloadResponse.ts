
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AuthorizeBackupDownloadResponse extends SdkResponse {
    public bucket?: string;
    private 'file_paths'?: Array<string>;
    public constructor() { 
        super();
    }
    public withBucket(bucket: string): AuthorizeBackupDownloadResponse {
        this['bucket'] = bucket;
        return this;
    }
    public withFilePaths(filePaths: Array<string>): AuthorizeBackupDownloadResponse {
        this['file_paths'] = filePaths;
        return this;
    }
    public set filePaths(filePaths: Array<string>  | undefined) {
        this['file_paths'] = filePaths;
    }
    public get filePaths(): Array<string> | undefined {
        return this['file_paths'];
    }
}