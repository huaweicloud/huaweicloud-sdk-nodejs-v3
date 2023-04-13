import { ListFile } from './ListFile';


export class SrcNodeResp {
    public bucket?: string;
    private 'cloud_type'?: SrcNodeRespCloudTypeEnum | undefined;
    public region?: string;
    private 'app_id'?: string | undefined;
    private 'object_key'?: Array<string> | undefined;
    private 'list_file'?: ListFile | undefined;
    public constructor() { 
    }
    public withBucket(bucket: string): SrcNodeResp {
        this['bucket'] = bucket;
        return this;
    }
    public withCloudType(cloudType: SrcNodeRespCloudTypeEnum): SrcNodeResp {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: SrcNodeRespCloudTypeEnum | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType() {
        return this['cloud_type'];
    }
    public withRegion(region: string): SrcNodeResp {
        this['region'] = region;
        return this;
    }
    public withAppId(appId: string): SrcNodeResp {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withObjectKey(objectKey: Array<string>): SrcNodeResp {
        this['object_key'] = objectKey;
        return this;
    }
    public set objectKey(objectKey: Array<string> | undefined) {
        this['object_key'] = objectKey;
    }
    public get objectKey() {
        return this['object_key'];
    }
    public withListFile(listFile: ListFile): SrcNodeResp {
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
export enum SrcNodeRespCloudTypeEnum {
    AWS = 'AWS',
    AZURE = 'Azure',
    ALIYUN = 'Aliyun',
    TENCENT = 'Tencent',
    HUAWEICLOUD = 'HuaweiCloud',
    QINGCLOUD = 'QingCloud',
    KINGSOFTCLOUD = 'KingsoftCloud',
    BAIDU = 'Baidu',
    QINIU = 'Qiniu',
    URLSOURCE = 'URLSource',
    UCLOUD = 'UCloud'
}
