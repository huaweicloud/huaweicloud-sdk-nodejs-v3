import { ListFile } from './ListFile';


export class SrcNodeReq {
    private 'cloud_type'?: string | undefined;
    public region?: string;
    public ak?: string;
    public sk?: string;
    private 'security_token'?: string | undefined;
    private 'app_id'?: string | undefined;
    public bucket?: string;
    private 'object_key'?: Array<string> | undefined;
    private 'list_file'?: ListFile | undefined;
    public constructor() { 
    }
    public withCloudType(cloudType: string): SrcNodeReq {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: string | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType() {
        return this['cloud_type'];
    }
    public withRegion(region: string): SrcNodeReq {
        this['region'] = region;
        return this;
    }
    public withAk(ak: string): SrcNodeReq {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): SrcNodeReq {
        this['sk'] = sk;
        return this;
    }
    public withSecurityToken(securityToken: string): SrcNodeReq {
        this['security_token'] = securityToken;
        return this;
    }
    public set securityToken(securityToken: string | undefined) {
        this['security_token'] = securityToken;
    }
    public get securityToken() {
        return this['security_token'];
    }
    public withAppId(appId: string): SrcNodeReq {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withBucket(bucket: string): SrcNodeReq {
        this['bucket'] = bucket;
        return this;
    }
    public withObjectKey(objectKey: Array<string>): SrcNodeReq {
        this['object_key'] = objectKey;
        return this;
    }
    public set objectKey(objectKey: Array<string> | undefined) {
        this['object_key'] = objectKey;
    }
    public get objectKey() {
        return this['object_key'];
    }
    public withListFile(listFile: ListFile): SrcNodeReq {
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