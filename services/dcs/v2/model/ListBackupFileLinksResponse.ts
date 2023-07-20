import { LinksItem } from './LinksItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBackupFileLinksResponse extends SdkResponse {
    private 'file_path'?: string;
    private 'bucket_name'?: string;
    public links?: Array<LinksItem>;
    public constructor() { 
        super();
    }
    public withFilePath(filePath: string): ListBackupFileLinksResponse {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withBucketName(bucketName: string): ListBackupFileLinksResponse {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withLinks(links: Array<LinksItem>): ListBackupFileLinksResponse {
        this['links'] = links;
        return this;
    }
}