

export class InstanceForApiActionDTO {
    private 'instance_id'?: string;
    private 'instance_type'?: InstanceForApiActionDTOInstanceTypeEnum | string;
    public name?: string;
    public action?: InstanceForApiActionDTOActionEnum | string;
    public result?: boolean;
    public cause?: InstanceForApiActionDTOCauseEnum | string;
    private 'api_status'?: InstanceForApiActionDTOApiStatusEnum | string;
    private 'api_debug'?: InstanceForApiActionDTOApiDebugEnum | string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): InstanceForApiActionDTO {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceType(instanceType: InstanceForApiActionDTOInstanceTypeEnum | string): InstanceForApiActionDTO {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: InstanceForApiActionDTOInstanceTypeEnum | string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): InstanceForApiActionDTOInstanceTypeEnum | string | undefined {
        return this['instance_type'];
    }
    public withName(name: string): InstanceForApiActionDTO {
        this['name'] = name;
        return this;
    }
    public withAction(action: InstanceForApiActionDTOActionEnum | string): InstanceForApiActionDTO {
        this['action'] = action;
        return this;
    }
    public withResult(result: boolean): InstanceForApiActionDTO {
        this['result'] = result;
        return this;
    }
    public withCause(cause: InstanceForApiActionDTOCauseEnum | string): InstanceForApiActionDTO {
        this['cause'] = cause;
        return this;
    }
    public withApiStatus(apiStatus: InstanceForApiActionDTOApiStatusEnum | string): InstanceForApiActionDTO {
        this['api_status'] = apiStatus;
        return this;
    }
    public set apiStatus(apiStatus: InstanceForApiActionDTOApiStatusEnum | string  | undefined) {
        this['api_status'] = apiStatus;
    }
    public get apiStatus(): InstanceForApiActionDTOApiStatusEnum | string | undefined {
        return this['api_status'];
    }
    public withApiDebug(apiDebug: InstanceForApiActionDTOApiDebugEnum | string): InstanceForApiActionDTO {
        this['api_debug'] = apiDebug;
        return this;
    }
    public set apiDebug(apiDebug: InstanceForApiActionDTOApiDebugEnum | string  | undefined) {
        this['api_debug'] = apiDebug;
    }
    public get apiDebug(): InstanceForApiActionDTOApiDebugEnum | string | undefined {
        return this['api_debug'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InstanceForApiActionDTOInstanceTypeEnum {
    DLM = 'DLM',
    APIG = 'APIG',
    APIGW = 'APIGW',
    ROMA_APIC = 'ROMA_APIC'
}
/**
    * @export
    * @enum {string}
    */
export enum InstanceForApiActionDTOActionEnum {
    PUBLISH = 'PUBLISH',
    UNPUBLISH = 'UNPUBLISH',
    STOP = 'STOP',
    RECOVER = 'RECOVER',
    WHITELIST = 'WHITELIST',
    AUTHORIZE = 'AUTHORIZE'
}
/**
    * @export
    * @enum {string}
    */
export enum InstanceForApiActionDTOCauseEnum {
    API_STATUS_ERROR = 'API_STATUS_ERROR',
    API_DEBUG_ERROR = 'API_DEBUG_ERROR',
    TYPE_MISMATCH = 'TYPE_MISMATCH'
}
/**
    * @export
    * @enum {string}
    */
export enum InstanceForApiActionDTOApiStatusEnum {
    API_STATUS_CREATED = 'API_STATUS_CREATED',
    API_STATUS_PUBLISH_WAIT_REVIEW = 'API_STATUS_PUBLISH_WAIT_REVIEW',
    API_STATUS_PUBLISH_REJECT = 'API_STATUS_PUBLISH_REJECT',
    API_STATUS_PUBLISHED = 'API_STATUS_PUBLISHED',
    API_STATUS_WAITING_STOP = 'API_STATUS_WAITING_STOP',
    API_STATUS_STOPPED = 'API_STATUS_STOPPED',
    API_STATUS_RECOVER_WAIT_REVIEW = 'API_STATUS_RECOVER_WAIT_REVIEW',
    API_STATUS_WAITING_OFFLINE = 'API_STATUS_WAITING_OFFLINE',
    API_STATUS_OFFLINE = 'API_STATUS_OFFLINE'
}
/**
    * @export
    * @enum {string}
    */
export enum InstanceForApiActionDTOApiDebugEnum {
    API_DEBUG_WAITING = 'API_DEBUG_WAITING',
    API_DEBUG_FAILED = 'API_DEBUG_FAILED',
    API_DEBUG_SUCCESS = 'API_DEBUG_SUCCESS'
}
