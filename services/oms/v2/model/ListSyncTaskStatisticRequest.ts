

export class ListSyncTaskStatisticRequest {
    private 'sync_task_id'?: string;
    private 'data_type'?: ListSyncTaskStatisticRequestDataTypeEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor(syncTaskId?: string, dataType?: string, startTime?: number, endTime?: number) { 
        this['sync_task_id'] = syncTaskId;
        this['data_type'] = dataType;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withSyncTaskId(syncTaskId: string): ListSyncTaskStatisticRequest {
        this['sync_task_id'] = syncTaskId;
        return this;
    }
    public set syncTaskId(syncTaskId: string  | undefined) {
        this['sync_task_id'] = syncTaskId;
    }
    public get syncTaskId(): string | undefined {
        return this['sync_task_id'];
    }
    public withDataType(dataType: ListSyncTaskStatisticRequestDataTypeEnum | string): ListSyncTaskStatisticRequest {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: ListSyncTaskStatisticRequestDataTypeEnum | string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): ListSyncTaskStatisticRequestDataTypeEnum | string | undefined {
        return this['data_type'];
    }
    public withStartTime(startTime: number): ListSyncTaskStatisticRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListSyncTaskStatisticRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSyncTaskStatisticRequestDataTypeEnum {
    REQUEST = 'REQUEST',
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE',
    SKIP = 'SKIP',
    SIZE = 'SIZE'
}
