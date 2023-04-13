import { ListFile } from './ListFile';


export class TaskGroupSrcNode {
    public ak?: string;
    public sk?: string;
    private 'app_id'?: string | undefined;
    public region?: string;
    private 'object_key'?: Array<string> | undefined;
    public bucket?: string;
    private 'cloud_type'?: string | undefined;
    private 'list_file'?: ListFile | undefined;
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
    public withAppId(appId: string): TaskGroupSrcNode {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
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
    public set objectKey(objectKey: Array<string> | undefined) {
        this['object_key'] = objectKey;
    }
    public get objectKey() {
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
    public set cloudType(cloudType: string | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType() {
        return this['cloud_type'];
    }
    public withListFile(listFile: ListFile): TaskGroupSrcNode {
        this['list_file'] = listFile;
        return this;
    }
    public set listFile(listFile: ListFile | undefined) {
        this['list_file'] = listFile;
    }
    public get listFile() {
        return this['list_file'];
    }
}