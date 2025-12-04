

export class PushShareAppsRequestBody {
    private 'package_name'?: string;
    private 'pre_install_app'?: number;
    private 'bucket_name'?: string;
    private 'object_path'?: string;
    private 'server_ids'?: Array<string>;
    public constructor(packageName?: string, bucketName?: string, objectPath?: string, serverIds?: Array<string>) { 
        this['package_name'] = packageName;
        this['bucket_name'] = bucketName;
        this['object_path'] = objectPath;
        this['server_ids'] = serverIds;
    }
    public withPackageName(packageName: string): PushShareAppsRequestBody {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
    public withPreInstallApp(preInstallApp: number): PushShareAppsRequestBody {
        this['pre_install_app'] = preInstallApp;
        return this;
    }
    public set preInstallApp(preInstallApp: number  | undefined) {
        this['pre_install_app'] = preInstallApp;
    }
    public get preInstallApp(): number | undefined {
        return this['pre_install_app'];
    }
    public withBucketName(bucketName: string): PushShareAppsRequestBody {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withObjectPath(objectPath: string): PushShareAppsRequestBody {
        this['object_path'] = objectPath;
        return this;
    }
    public set objectPath(objectPath: string  | undefined) {
        this['object_path'] = objectPath;
    }
    public get objectPath(): string | undefined {
        return this['object_path'];
    }
    public withServerIds(serverIds: Array<string>): PushShareAppsRequestBody {
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