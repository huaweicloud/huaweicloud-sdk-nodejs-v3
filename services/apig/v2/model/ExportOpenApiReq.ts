

export class ExportOpenApiReq {
    private 'env_id'?: string;
    private 'group_id'?: string;
    public define?: ExportOpenApiReqDefineEnum | string;
    public type?: ExportOpenApiReqTypeEnum | string;
    public version?: string;
    public apis?: Array<string>;
    public constructor(envId?: string, groupId?: string) { 
        this['env_id'] = envId;
        this['group_id'] = groupId;
    }
    public withEnvId(envId: string): ExportOpenApiReq {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withGroupId(groupId: string): ExportOpenApiReq {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withDefine(define: ExportOpenApiReqDefineEnum | string): ExportOpenApiReq {
        this['define'] = define;
        return this;
    }
    public withType(type: ExportOpenApiReqTypeEnum | string): ExportOpenApiReq {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ExportOpenApiReq {
        this['version'] = version;
        return this;
    }
    public withApis(apis: Array<string>): ExportOpenApiReq {
        this['apis'] = apis;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportOpenApiReqDefineEnum {
    SPEC = 'spec',
    PROXY = 'proxy',
    ALL = 'all',
    DEV = 'dev'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportOpenApiReqTypeEnum {
    JSON = 'json',
    YAML = 'yaml',
    YML = 'yml'
}
