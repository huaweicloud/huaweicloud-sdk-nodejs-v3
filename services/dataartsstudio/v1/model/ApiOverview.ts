

export class ApiOverview {
    public id?: string;
    public name?: string;
    private 'group_id'?: string;
    public description?: string;
    public status?: ApiOverviewStatusEnum | string;
    private 'debug_status'?: ApiOverviewDebugStatusEnum | string;
    public type?: ApiOverviewTypeEnum | string;
    public manager?: string;
    private 'create_user'?: string;
    private 'create_time'?: number;
    public constructor() { 
    }
    public withId(id: string): ApiOverview {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ApiOverview {
        this['name'] = name;
        return this;
    }
    public withGroupId(groupId: string): ApiOverview {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withDescription(description: string): ApiOverview {
        this['description'] = description;
        return this;
    }
    public withStatus(status: ApiOverviewStatusEnum | string): ApiOverview {
        this['status'] = status;
        return this;
    }
    public withDebugStatus(debugStatus: ApiOverviewDebugStatusEnum | string): ApiOverview {
        this['debug_status'] = debugStatus;
        return this;
    }
    public set debugStatus(debugStatus: ApiOverviewDebugStatusEnum | string  | undefined) {
        this['debug_status'] = debugStatus;
    }
    public get debugStatus(): ApiOverviewDebugStatusEnum | string | undefined {
        return this['debug_status'];
    }
    public withType(type: ApiOverviewTypeEnum | string): ApiOverview {
        this['type'] = type;
        return this;
    }
    public withManager(manager: string): ApiOverview {
        this['manager'] = manager;
        return this;
    }
    public withCreateUser(createUser: string): ApiOverview {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withCreateTime(createTime: number): ApiOverview {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiOverviewStatusEnum {
    API_STATUS_CREATED = 'API_STATUS_CREATED',
    API_STATUS_PUBLISH_WAIT_REVIEW = 'API_STATUS_PUBLISH_WAIT_REVIEW',
    API_STATUS_PUBLISH_REJECT = 'API_STATUS_PUBLISH_REJECT',
    API_STATUS_PUBLISHED = 'API_STATUS_PUBLISHED',
    API_STATUS_WAITING_STOP = 'API_STATUS_WAITING_STOP',
    API_STATUS_STOPPED = 'API_STATUS_STOPPED',
    API_STATUS_RECOVER_WAIT_REVIEW = 'API_STATUS_RECOVER_WAIT_REVIEW',
    API_STATUS_WAITING_OFFLINE = 'API_STATUS_WAITING_OFFLINE',
    API_STATUS_OFFLINE = 'API_STATUS_OFFLINE',
    API_STATUS_OFFLINE_WAIT_REVIEW = 'API_STATUS_OFFLINE_WAIT_REVIEW'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiOverviewDebugStatusEnum {
    API_DEBUG_WAITING = 'API_DEBUG_WAITING',
    API_DEBUG_FAILED = 'API_DEBUG_FAILED',
    API_DEBUG_SUCCESS = 'API_DEBUG_SUCCESS'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiOverviewTypeEnum {
    API_SPECIFIC_TYPE_CONFIGURATION = 'API_SPECIFIC_TYPE_CONFIGURATION',
    API_SPECIFIC_TYPE_SCRIPT = 'API_SPECIFIC_TYPE_SCRIPT',
    API_SPECIFIC_TYPE_REGISTER = 'API_SPECIFIC_TYPE_REGISTER'
}
