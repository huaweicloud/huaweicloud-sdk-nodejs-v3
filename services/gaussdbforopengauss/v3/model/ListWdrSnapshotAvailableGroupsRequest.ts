

export class ListWdrSnapshotAvailableGroupsRequest {
    private 'X-Language'?: ListWdrSnapshotAvailableGroupsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public constructor(instanceId?: string, beginTime?: string, endTime?: string) { 
        this['instance_id'] = instanceId;
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
    }
    public withXLanguage(xLanguage: ListWdrSnapshotAvailableGroupsRequestXLanguageEnum | string): ListWdrSnapshotAvailableGroupsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListWdrSnapshotAvailableGroupsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListWdrSnapshotAvailableGroupsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListWdrSnapshotAvailableGroupsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBeginTime(beginTime: string): ListWdrSnapshotAvailableGroupsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListWdrSnapshotAvailableGroupsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListWdrSnapshotAvailableGroupsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
