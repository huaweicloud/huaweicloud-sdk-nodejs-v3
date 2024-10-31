

export class AclBindApiInfo {
    private 'api_id'?: string;
    private 'api_name'?: string;
    private 'api_type'?: number;
    private 'api_remark'?: string;
    private 'env_id'?: string;
    private 'env_name'?: string;
    private 'bind_id'?: string;
    private 'group_name'?: string;
    private 'bind_time'?: Date;
    private 'publish_id'?: string;
    private 'req_method'?: AclBindApiInfoReqMethodEnum | string;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withApiId(apiId: string): AclBindApiInfo {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withApiName(apiName: string): AclBindApiInfo {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withApiType(apiType: number): AclBindApiInfo {
        this['api_type'] = apiType;
        return this;
    }
    public set apiType(apiType: number  | undefined) {
        this['api_type'] = apiType;
    }
    public get apiType(): number | undefined {
        return this['api_type'];
    }
    public withApiRemark(apiRemark: string): AclBindApiInfo {
        this['api_remark'] = apiRemark;
        return this;
    }
    public set apiRemark(apiRemark: string  | undefined) {
        this['api_remark'] = apiRemark;
    }
    public get apiRemark(): string | undefined {
        return this['api_remark'];
    }
    public withEnvId(envId: string): AclBindApiInfo {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withEnvName(envName: string): AclBindApiInfo {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withBindId(bindId: string): AclBindApiInfo {
        this['bind_id'] = bindId;
        return this;
    }
    public set bindId(bindId: string  | undefined) {
        this['bind_id'] = bindId;
    }
    public get bindId(): string | undefined {
        return this['bind_id'];
    }
    public withGroupName(groupName: string): AclBindApiInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withBindTime(bindTime: Date): AclBindApiInfo {
        this['bind_time'] = bindTime;
        return this;
    }
    public set bindTime(bindTime: Date  | undefined) {
        this['bind_time'] = bindTime;
    }
    public get bindTime(): Date | undefined {
        return this['bind_time'];
    }
    public withPublishId(publishId: string): AclBindApiInfo {
        this['publish_id'] = publishId;
        return this;
    }
    public set publishId(publishId: string  | undefined) {
        this['publish_id'] = publishId;
    }
    public get publishId(): string | undefined {
        return this['publish_id'];
    }
    public withReqMethod(reqMethod: AclBindApiInfoReqMethodEnum | string): AclBindApiInfo {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: AclBindApiInfoReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): AclBindApiInfoReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withTags(tags: Array<string>): AclBindApiInfo {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AclBindApiInfoReqMethodEnum {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT',
    PATCH = 'PATCH',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
    ANY = 'ANY'
}
