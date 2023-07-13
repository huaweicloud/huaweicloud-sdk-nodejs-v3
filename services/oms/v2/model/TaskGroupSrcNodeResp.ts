import { ListFile } from './ListFile';


export class TaskGroupSrcNodeResp {
    public bucket?: string;
    private 'cloud_type'?: TaskGroupSrcNodeRespCloudTypeEnum | undefined;
    public region?: string;
    private 'app_id'?: string | undefined;
    private 'object_key'?: Array<string> | undefined;
    private 'list_file'?: ListFile | undefined;
    public constructor() { 
    }
    public withBucket(bucket: string): TaskGroupSrcNodeResp {
        this['bucket'] = bucket;
        return this;
    }
    public withCloudType(cloudType: TaskGroupSrcNodeRespCloudTypeEnum): TaskGroupSrcNodeResp {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: TaskGroupSrcNodeRespCloudTypeEnum | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType() {
        return this['cloud_type'];
    }
    public withRegion(region: string): TaskGroupSrcNodeResp {
        this['region'] = region;
        return this;
    }
    public withAppId(appId: string): TaskGroupSrcNodeResp {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withObjectKey(objectKey: Array<string>): TaskGroupSrcNodeResp {
        this['object_key'] = objectKey;
        return this;
    }
    public set objectKey(objectKey: Array<string> | undefined) {
        this['object_key'] = objectKey;
    }
    public get objectKey() {
        return this['object_key'];
    }
    public withListFile(listFile: ListFile): TaskGroupSrcNodeResp {
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

/**
    * @export
    * @enum {string}
    */
export enum TaskGroupSrcNodeRespCloudTypeEnum {
    AWS = 'AWS',
    AZURE = 'AZURE',
    ALIYUN = 'ALIYUN',
    TENCENT = 'TENCENT',
    HUAWEICLOUD = 'HUAWEICLOUD',
    QINGCLOUD = 'QINGCLOUD',
    KINGSOFTCLOUD = 'KINGSOFTCLOUD',
    BAIDU = 'BAIDU',
    QINIU = 'QINIU',
    URLSOURCE = 'URLSOURCE',
    UCLOUD = 'UCLOUD'
}
