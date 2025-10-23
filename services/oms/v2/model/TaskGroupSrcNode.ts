import { ListFile } from './ListFile';


export class TaskGroupSrcNode {
    public ak?: string;
    public sk?: string;
    private 'connection_string'?: string;
    private 'json_auth_file'?: string;
    private 'app_id'?: string;
    public region?: string;
    private 'object_key'?: Array<string>;
    public bucket?: string;
    private 'cloud_type'?: string;
    private 'list_file'?: ListFile;
    public constructor() { 
    }
    public withAk(ak: string): TaskGroupSrcNode {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): TaskGroupSrcNode {
        this['sk'] = sk;
        return this;
    }
    public withConnectionString(connectionString: string): TaskGroupSrcNode {
        this['connection_string'] = connectionString;
        return this;
    }
    public set connectionString(connectionString: string  | undefined) {
        this['connection_string'] = connectionString;
    }
    public get connectionString(): string | undefined {
        return this['connection_string'];
    }
    public withJsonAuthFile(jsonAuthFile: string): TaskGroupSrcNode {
        this['json_auth_file'] = jsonAuthFile;
        return this;
    }
    public set jsonAuthFile(jsonAuthFile: string  | undefined) {
        this['json_auth_file'] = jsonAuthFile;
    }
    public get jsonAuthFile(): string | undefined {
        return this['json_auth_file'];
    }
    public withAppId(appId: string): TaskGroupSrcNode {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withRegion(region: string): TaskGroupSrcNode {
        this['region'] = region;
        return this;
    }
    public withObjectKey(objectKey: Array<string>): TaskGroupSrcNode {
        this['object_key'] = objectKey;
        return this;
    }
    public set objectKey(objectKey: Array<string>  | undefined) {
        this['object_key'] = objectKey;
    }
    public get objectKey(): Array<string> | undefined {
        return this['object_key'];
    }
    public withBucket(bucket: string): TaskGroupSrcNode {
        this['bucket'] = bucket;
        return this;
    }
    public withCloudType(cloudType: string): TaskGroupSrcNode {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: string  | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType(): string | undefined {
        return this['cloud_type'];
    }
    public withListFile(listFile: ListFile): TaskGroupSrcNode {
        this['list_file'] = listFile;
        return this;
    }
    public set listFile(listFile: ListFile  | undefined) {
        this['list_file'] = listFile;
    }
    public get listFile(): ListFile | undefined {
        return this['list_file'];
    }
}