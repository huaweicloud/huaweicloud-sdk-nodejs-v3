

export class StorageInfo {
    private 'phone_id'?: string;
    private 'include_files'?: Array<string>;
    private 'exclude_files'?: Array<string>;
    private 'bucket_name'?: string;
    private 'object_path'?: string;
    public constructor(phoneId?: string, includeFiles?: Array<string>, bucketName?: string, objectPath?: string) { 
        this['phone_id'] = phoneId;
        this['include_files'] = includeFiles;
        this['bucket_name'] = bucketName;
        this['object_path'] = objectPath;
    }
    public withPhoneId(phoneId: string): StorageInfo {
        this['phone_id'] = phoneId;
        return this;
    }
    public set phoneId(phoneId: string  | undefined) {
        this['phone_id'] = phoneId;
    }
    public get phoneId(): string | undefined {
        return this['phone_id'];
    }
    public withIncludeFiles(includeFiles: Array<string>): StorageInfo {
        this['include_files'] = includeFiles;
        return this;
    }
    public set includeFiles(includeFiles: Array<string>  | undefined) {
        this['include_files'] = includeFiles;
    }
    public get includeFiles(): Array<string> | undefined {
        return this['include_files'];
    }
    public withExcludeFiles(excludeFiles: Array<string>): StorageInfo {
        this['exclude_files'] = excludeFiles;
        return this;
    }
    public set excludeFiles(excludeFiles: Array<string>  | undefined) {
        this['exclude_files'] = excludeFiles;
    }
    public get excludeFiles(): Array<string> | undefined {
        return this['exclude_files'];
    }
    public withBucketName(bucketName: string): StorageInfo {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withObjectPath(objectPath: string): StorageInfo {
        this['object_path'] = objectPath;
        return this;
    }
    public set objectPath(objectPath: string  | undefined) {
        this['object_path'] = objectPath;
    }
    public get objectPath(): string | undefined {
        return this['object_path'];
    }
}