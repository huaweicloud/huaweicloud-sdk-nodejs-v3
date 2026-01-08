

export class ListAlarmHistoriesRequest {
    private 'alarm_id'?: Array<string>;
    private 'record_id'?: string;
    public name?: string;
    public status?: Array<ListAlarmHistoriesRequestStatusEnum> | Array<string>;
    public level?: number;
    public namespace?: string;
    private 'resource_id'?: string;
    public from?: string;
    public to?: string;
    private 'alarm_type'?: ListAlarmHistoriesRequestAlarmTypeEnum | string;
    private 'create_time_from'?: string;
    private 'create_time_to'?: string;
    public offset?: number;
    public limit?: number;
    private 'order_by'?: ListAlarmHistoriesRequestOrderByEnum | string;
    private 'mask_status'?: string;
    public constructor() { 
    }
    public withAlarmId(alarmId: Array<string>): ListAlarmHistoriesRequest {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: Array<string>  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): Array<string> | undefined {
        return this['alarm_id'];
    }
    public withRecordId(recordId: string): ListAlarmHistoriesRequest {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withName(name: string): ListAlarmHistoriesRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: Array<ListAlarmHistoriesRequestStatusEnum> | Array<string>): ListAlarmHistoriesRequest {
        this['status'] = status;
        return this;
    }
    public withLevel(level: number): ListAlarmHistoriesRequest {
        this['level'] = level;
        return this;
    }
    public withNamespace(namespace: string): ListAlarmHistoriesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withResourceId(resourceId: string): ListAlarmHistoriesRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withFrom(from: string): ListAlarmHistoriesRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: string): ListAlarmHistoriesRequest {
        this['to'] = to;
        return this;
    }
    public withAlarmType(alarmType: ListAlarmHistoriesRequestAlarmTypeEnum | string): ListAlarmHistoriesRequest {
        this['alarm_type'] = alarmType;
        return this;
    }
    public set alarmType(alarmType: ListAlarmHistoriesRequestAlarmTypeEnum | string  | undefined) {
        this['alarm_type'] = alarmType;
    }
    public get alarmType(): ListAlarmHistoriesRequestAlarmTypeEnum | string | undefined {
        return this['alarm_type'];
    }
    public withCreateTimeFrom(createTimeFrom: string): ListAlarmHistoriesRequest {
        this['create_time_from'] = createTimeFrom;
        return this;
    }
    public set createTimeFrom(createTimeFrom: string  | undefined) {
        this['create_time_from'] = createTimeFrom;
    }
    public get createTimeFrom(): string | undefined {
        return this['create_time_from'];
    }
    public withCreateTimeTo(createTimeTo: string): ListAlarmHistoriesRequest {
        this['create_time_to'] = createTimeTo;
        return this;
    }
    public set createTimeTo(createTimeTo: string  | undefined) {
        this['create_time_to'] = createTimeTo;
    }
    public get createTimeTo(): string | undefined {
        return this['create_time_to'];
    }
    public withOffset(offset: number): ListAlarmHistoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAlarmHistoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrderBy(orderBy: ListAlarmHistoriesRequestOrderByEnum | string): ListAlarmHistoriesRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListAlarmHistoriesRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListAlarmHistoriesRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withMaskStatus(maskStatus: string): ListAlarmHistoriesRequest {
        this['mask_status'] = maskStatus;
        return this;
    }
    public set maskStatus(maskStatus: string  | undefined) {
        this['mask_status'] = maskStatus;
    }
    public get maskStatus(): string | undefined {
        return this['mask_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAlarmHistoriesRequestStatusEnum {
    OK = 'ok',
    ALARM = 'alarm',
    INVALID = 'invalid',
    INSUFFICIENT_DATA = 'insufficient_data',
    OK_MANUAL = 'ok_manual'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAlarmHistoriesRequestAlarmTypeEnum {
    EVENT = 'event',
    METRIC = 'metric'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAlarmHistoriesRequestOrderByEnum {
    FIRST_ALARM_TIME = 'first_alarm_time',
    UPDATE_TIME = 'update_time',
    ALARM_LEVEL = 'alarm_level',
    RECORD_ID = 'record_id'
}
