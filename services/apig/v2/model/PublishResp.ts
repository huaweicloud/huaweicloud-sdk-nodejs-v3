

export class PublishResp {
    private 'publish_id'?: string;
    private 'api_id'?: string;
    private 'api_name'?: string;
    private 'env_id'?: string;
    public remark?: string;
    private 'publish_time'?: Date;
    private 'version_id'?: string;
    public constructor() { 
    }
    public withPublishId(publishId: string): PublishResp {
        this['publish_id'] = publishId;
        return this;
    }
    public set publishId(publishId: string  | undefined) {
        this['publish_id'] = publishId;
    }
    public get publishId(): string | undefined {
        return this['publish_id'];
    }
    public withApiId(apiId: string): PublishResp {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withApiName(apiName: string): PublishResp {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withEnvId(envId: string): PublishResp {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withRemark(remark: string): PublishResp {
        this['remark'] = remark;
        return this;
    }
    public withPublishTime(publishTime: Date): PublishResp {
        this['publish_time'] = publishTime;
        return this;
    }
    public set publishTime(publishTime: Date  | undefined) {
        this['publish_time'] = publishTime;
    }
    public get publishTime(): Date | undefined {
        return this['publish_time'];
    }
    public withVersionId(versionId: string): PublishResp {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
}