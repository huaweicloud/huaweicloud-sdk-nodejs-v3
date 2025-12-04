

export class PushShareFilesRequestBody {
    private 'bucket_name'?: string;
    private 'object_path'?: string;
    private 'server_ids'?: Array<string>;
    public constructor(bucketName?: string, objectPath?: string, serverIds?: Array<string>) { 
        this['bucket_name'] = bucketName;
        this['object_path'] = objectPath;
        this['server_ids'] = serverIds;
    }
    public withBucketName(bucketName: string): PushShareFilesRequestBody {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withObjectPath(objectPath: string): PushShareFilesRequestBody {
        this['object_path'] = objectPath;
        return this;
    }
    public set objectPath(objectPath: string  | undefined) {
        this['object_path'] = objectPath;
    }
    public get objectPath(): string | undefined {
        return this['object_path'];
    }
    public withServerIds(serverIds: Array<string>): PushShareFilesRequestBody {
        this['server_ids'] = serverIds;
        return this;
    }
    public set serverIds(serverIds: Array<string>  | undefined) {
        this['server_ids'] = serverIds;
    }
    public get serverIds(): Array<string> | undefined {
        return this['server_ids'];
    }
}