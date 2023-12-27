
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadSslCertResponse extends SdkResponse {
    private 'file_name'?: string;
    public link?: string;
    private 'bucket_name'?: string;
    public constructor() { 
        super();
    }
    public withFileName(fileName: string): DownloadSslCertResponse {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withLink(link: string): DownloadSslCertResponse {
        this['link'] = link;
        return this;
    }
    public withBucketName(bucketName: string): DownloadSslCertResponse {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
}