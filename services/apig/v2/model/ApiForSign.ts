import { ApiOutline } from './ApiOutline';


export class ApiForSign {
    private 'auth_type'?: ApiForSignAuthTypeEnum | string;
    private 'run_env_name'?: string;
    private 'group_name'?: string;
    private 'publish_id'?: string;
    private 'group_id'?: string;
    public name?: string;
    public remark?: string;
    private 'run_env_id'?: string;
    public id?: string;
    private 'req_uri'?: string;
    public tags?: Array<string>;
    public type?: ApiForSignTypeEnum | number;
    private 'signature_name'?: string;
    private 'req_method'?: ApiForSignReqMethodEnum | string;
    public constructor() { 
    }
    public withAuthType(authType: ApiForSignAuthTypeEnum | string): ApiForSign {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: ApiForSignAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): ApiForSignAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withRunEnvName(runEnvName: string): ApiForSign {
        this['run_env_name'] = runEnvName;
        return this;
    }
    public set runEnvName(runEnvName: string  | undefined) {
        this['run_env_name'] = runEnvName;
    }
    public get runEnvName(): string | undefined {
        return this['run_env_name'];
    }
    public withGroupName(groupName: string): ApiForSign {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withPublishId(publishId: string): ApiForSign {
        this['publish_id'] = publishId;
        return this;
    }
    public set publishId(publishId: string  | undefined) {
        this['publish_id'] = publishId;
    }
    public get publishId(): string | undefined {
        return this['publish_id'];
    }
    public withGroupId(groupId: string): ApiForSign {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withName(name: string): ApiForSign {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): ApiForSign {
        this['remark'] = remark;
        return this;
    }
    public withRunEnvId(runEnvId: string): ApiForSign {
        this['run_env_id'] = runEnvId;
        return this;
    }
    public set runEnvId(runEnvId: string  | undefined) {
        this['run_env_id'] = runEnvId;
    }
    public get runEnvId(): string | undefined {
        return this['run_env_id'];
    }
    public withId(id: string): ApiForSign {
        this['id'] = id;
        return this;
    }
    public withReqUri(reqUri: string): ApiForSign {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withTags(tags: Array<string>): ApiForSign {
        this['tags'] = tags;
        return this;
    }
    public withType(type: ApiForSignTypeEnum | number): ApiForSign {
        this['type'] = type;
        return this;
    }
    public withSignatureName(signatureName: string): ApiForSign {
        this['signature_name'] = signatureName;
        return this;
    }
    public set signatureName(signatureName: string  | undefined) {
        this['signature_name'] = signatureName;
    }
    public get signatureName(): string | undefined {
        return this['signature_name'];
    }
    public withReqMethod(reqMethod: ApiForSignReqMethodEnum | string): ApiForSign {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: ApiForSignReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): ApiForSignReqMethodEnum | string | undefined {
        return this['req_method'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiForSignAuthTypeEnum {
    NONE = 'NONE',
    APP = 'APP',
    IAM = 'IAM',
    AUTHORIZER = 'AUTHORIZER'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiForSignTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ApiForSignReqMethodEnum {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT',
    PATCH = 'PATCH',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
    ANY = 'ANY'
}
