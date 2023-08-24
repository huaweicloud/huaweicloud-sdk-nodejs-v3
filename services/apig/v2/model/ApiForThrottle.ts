

export class ApiForThrottle {
    private 'auth_type'?: string;
    private 'group_name'?: string;
    private 'publish_id'?: string;
    private 'throttle_apply_id'?: string;
    private 'apply_time'?: Date;
    public remark?: string;
    private 'run_env_id'?: string;
    public type?: number;
    private 'throttle_name'?: string;
    private 'req_uri'?: string;
    private 'run_env_name'?: string;
    private 'group_id'?: string;
    public name?: string;
    public id?: string;
    private 'req_method'?: ApiForThrottleReqMethodEnum | string;
    public constructor() { 
    }
    public withAuthType(authType: string): ApiForThrottle {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withGroupName(groupName: string): ApiForThrottle {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withPublishId(publishId: string): ApiForThrottle {
        this['publish_id'] = publishId;
        return this;
    }
    public set publishId(publishId: string  | undefined) {
        this['publish_id'] = publishId;
    }
    public get publishId(): string | undefined {
        return this['publish_id'];
    }
    public withThrottleApplyId(throttleApplyId: string): ApiForThrottle {
        this['throttle_apply_id'] = throttleApplyId;
        return this;
    }
    public set throttleApplyId(throttleApplyId: string  | undefined) {
        this['throttle_apply_id'] = throttleApplyId;
    }
    public get throttleApplyId(): string | undefined {
        return this['throttle_apply_id'];
    }
    public withApplyTime(applyTime: Date): ApiForThrottle {
        this['apply_time'] = applyTime;
        return this;
    }
    public set applyTime(applyTime: Date  | undefined) {
        this['apply_time'] = applyTime;
    }
    public get applyTime(): Date | undefined {
        return this['apply_time'];
    }
    public withRemark(remark: string): ApiForThrottle {
        this['remark'] = remark;
        return this;
    }
    public withRunEnvId(runEnvId: string): ApiForThrottle {
        this['run_env_id'] = runEnvId;
        return this;
    }
    public set runEnvId(runEnvId: string  | undefined) {
        this['run_env_id'] = runEnvId;
    }
    public get runEnvId(): string | undefined {
        return this['run_env_id'];
    }
    public withType(type: number): ApiForThrottle {
        this['type'] = type;
        return this;
    }
    public withThrottleName(throttleName: string): ApiForThrottle {
        this['throttle_name'] = throttleName;
        return this;
    }
    public set throttleName(throttleName: string  | undefined) {
        this['throttle_name'] = throttleName;
    }
    public get throttleName(): string | undefined {
        return this['throttle_name'];
    }
    public withReqUri(reqUri: string): ApiForThrottle {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withRunEnvName(runEnvName: string): ApiForThrottle {
        this['run_env_name'] = runEnvName;
        return this;
    }
    public set runEnvName(runEnvName: string  | undefined) {
        this['run_env_name'] = runEnvName;
    }
    public get runEnvName(): string | undefined {
        return this['run_env_name'];
    }
    public withGroupId(groupId: string): ApiForThrottle {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withName(name: string): ApiForThrottle {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ApiForThrottle {
        this['id'] = id;
        return this;
    }
    public withReqMethod(reqMethod: ApiForThrottleReqMethodEnum | string): ApiForThrottle {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: ApiForThrottleReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): ApiForThrottleReqMethodEnum | string | undefined {
        return this['req_method'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiForThrottleReqMethodEnum {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT',
    PATCH = 'PATCH',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
    ANY = 'ANY'
}
