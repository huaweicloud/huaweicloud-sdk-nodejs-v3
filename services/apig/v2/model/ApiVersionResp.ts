

export class ApiVersionResp {
    private 'version_id'?: string;
    private 'version_no'?: string;
    private 'api_id'?: string;
    private 'env_id'?: string;
    private 'env_name'?: string;
    public remark?: string;
    private 'publish_time'?: Date;
    public status?: ApiVersionRespStatusEnum | number;
    public constructor() { 
    }
    public withVersionId(versionId: string): ApiVersionResp {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withVersionNo(versionNo: string): ApiVersionResp {
        this['version_no'] = versionNo;
        return this;
    }
    public set versionNo(versionNo: string  | undefined) {
        this['version_no'] = versionNo;
    }
    public get versionNo(): string | undefined {
        return this['version_no'];
    }
    public withApiId(apiId: string): ApiVersionResp {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withEnvId(envId: string): ApiVersionResp {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withEnvName(envName: string): ApiVersionResp {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withRemark(remark: string): ApiVersionResp {
        this['remark'] = remark;
        return this;
    }
    public withPublishTime(publishTime: Date): ApiVersionResp {
        this['publish_time'] = publishTime;
        return this;
    }
    public set publishTime(publishTime: Date  | undefined) {
        this['publish_time'] = publishTime;
    }
    public get publishTime(): Date | undefined {
        return this['publish_time'];
    }
    public withStatus(status: ApiVersionRespStatusEnum | number): ApiVersionResp {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiVersionRespStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
