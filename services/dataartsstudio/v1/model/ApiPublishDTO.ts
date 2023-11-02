

export class ApiPublishDTO {
    public id?: string;
    private 'api_id'?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'api_status'?: ApiPublishDTOApiStatusEnum | string;
    private 'api_debug'?: ApiPublishDTOApiDebugEnum | string;
    public constructor() { 
    }
    public withId(id: string): ApiPublishDTO {
        this['id'] = id;
        return this;
    }
    public withApiId(apiId: string): ApiPublishDTO {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withInstanceId(instanceId: string): ApiPublishDTO {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ApiPublishDTO {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withApiStatus(apiStatus: ApiPublishDTOApiStatusEnum | string): ApiPublishDTO {
        this['api_status'] = apiStatus;
        return this;
    }
    public set apiStatus(apiStatus: ApiPublishDTOApiStatusEnum | string  | undefined) {
        this['api_status'] = apiStatus;
    }
    public get apiStatus(): ApiPublishDTOApiStatusEnum | string | undefined {
        return this['api_status'];
    }
    public withApiDebug(apiDebug: ApiPublishDTOApiDebugEnum | string): ApiPublishDTO {
        this['api_debug'] = apiDebug;
        return this;
    }
    public set apiDebug(apiDebug: ApiPublishDTOApiDebugEnum | string  | undefined) {
        this['api_debug'] = apiDebug;
    }
    public get apiDebug(): ApiPublishDTOApiDebugEnum | string | undefined {
        return this['api_debug'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiPublishDTOApiStatusEnum {
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
export enum ApiPublishDTOApiDebugEnum {
    API_DEBUG_WAITING = 'API_DEBUG_WAITING',
    API_DEBUG_FAILED = 'API_DEBUG_FAILED',
    API_DEBUG_SUCCESS = 'API_DEBUG_SUCCESS'
}
