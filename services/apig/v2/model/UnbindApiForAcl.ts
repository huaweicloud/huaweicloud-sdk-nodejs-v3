

export class UnbindApiForAcl {
    public id?: string;
    public name?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    public type?: number;
    public remark?: string;
    private 'run_env_name'?: string;
    private 'run_env_id'?: string;
    private 'publish_id'?: string;
    private 'acl_name'?: string;
    private 'req_uri'?: string;
    private 'auth_type'?: string;
    private 'req_method'?: UnbindApiForAclReqMethodEnum | string;
    public constructor() { 
    }
    public withId(id: string): UnbindApiForAcl {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UnbindApiForAcl {
        this['name'] = name;
        return this;
    }
    public withGroupId(groupId: string): UnbindApiForAcl {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): UnbindApiForAcl {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withType(type: number): UnbindApiForAcl {
        this['type'] = type;
        return this;
    }
    public withRemark(remark: string): UnbindApiForAcl {
        this['remark'] = remark;
        return this;
    }
    public withRunEnvName(runEnvName: string): UnbindApiForAcl {
        this['run_env_name'] = runEnvName;
        return this;
    }
    public set runEnvName(runEnvName: string  | undefined) {
        this['run_env_name'] = runEnvName;
    }
    public get runEnvName(): string | undefined {
        return this['run_env_name'];
    }
    public withRunEnvId(runEnvId: string): UnbindApiForAcl {
        this['run_env_id'] = runEnvId;
        return this;
    }
    public set runEnvId(runEnvId: string  | undefined) {
        this['run_env_id'] = runEnvId;
    }
    public get runEnvId(): string | undefined {
        return this['run_env_id'];
    }
    public withPublishId(publishId: string): UnbindApiForAcl {
        this['publish_id'] = publishId;
        return this;
    }
    public set publishId(publishId: string  | undefined) {
        this['publish_id'] = publishId;
    }
    public get publishId(): string | undefined {
        return this['publish_id'];
    }
    public withAclName(aclName: string): UnbindApiForAcl {
        this['acl_name'] = aclName;
        return this;
    }
    public set aclName(aclName: string  | undefined) {
        this['acl_name'] = aclName;
    }
    public get aclName(): string | undefined {
        return this['acl_name'];
    }
    public withReqUri(reqUri: string): UnbindApiForAcl {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withAuthType(authType: string): UnbindApiForAcl {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withReqMethod(reqMethod: UnbindApiForAclReqMethodEnum | string): UnbindApiForAcl {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: UnbindApiForAclReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): UnbindApiForAclReqMethodEnum | string | undefined {
        return this['req_method'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UnbindApiForAclReqMethodEnum {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT',
    PATCH = 'PATCH',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
    ANY = 'ANY'
}
