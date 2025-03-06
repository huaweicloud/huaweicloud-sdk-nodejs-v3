

export class ListScheduleTaskRequest {
    private 'X-Language'?: ListScheduleTaskRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public status?: ListScheduleTaskRequestStatusEnum | string;
    public name?: ListScheduleTaskRequestNameEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListScheduleTaskRequestXLanguageEnum | string): ListScheduleTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListScheduleTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListScheduleTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListScheduleTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: ListScheduleTaskRequestStatusEnum | string): ListScheduleTaskRequest {
        this['status'] = status;
        return this;
    }
    public withName(name: ListScheduleTaskRequestNameEnum | string): ListScheduleTaskRequest {
        this['name'] = name;
        return this;
    }
    public withStartTime(startTime: string): ListScheduleTaskRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListScheduleTaskRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): ListScheduleTaskRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListScheduleTaskRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListScheduleTaskRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ListScheduleTaskRequestStatusEnum {
    RUNNING = 'Running',
    COMPLETED = 'Completed',
    FAILED = 'Failed',
    CANCELED = 'Canceled',
    PENDING = 'Pending'
}
/**
    * @export
    * @enum {string}
    */
export enum ListScheduleTaskRequestNameEnum {
    HOTFIX_VERSION_UPGRADE = 'HOTFIX_VERSION_UPGRADE'
}
