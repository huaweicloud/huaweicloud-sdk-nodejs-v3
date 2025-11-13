

export class CreateExportTaskReq {
    private 'bucket_name'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'file_path'?: string;
    private 'time_zone'?: string;
    public order?: CreateExportTaskReqOrderEnum | string;
    private 'order_by'?: CreateExportTaskReqOrderByEnum | string;
    private 'last_sec_min'?: number;
    private 'last_sec_max'?: number;
    public constructor(bucketName?: string, startAt?: number, endAt?: number) { 
        this['bucket_name'] = bucketName;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withBucketName(bucketName: string): CreateExportTaskReq {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withStartAt(startAt: number): CreateExportTaskReq {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): CreateExportTaskReq {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withFilePath(filePath: string): CreateExportTaskReq {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withTimeZone(timeZone: string): CreateExportTaskReq {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withOrder(order: CreateExportTaskReqOrderEnum | string): CreateExportTaskReq {
        this['order'] = order;
        return this;
    }
    public withOrderBy(orderBy: CreateExportTaskReqOrderByEnum | string): CreateExportTaskReq {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: CreateExportTaskReqOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): CreateExportTaskReqOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withLastSecMin(lastSecMin: number): CreateExportTaskReq {
        this['last_sec_min'] = lastSecMin;
        return this;
    }
    public set lastSecMin(lastSecMin: number  | undefined) {
        this['last_sec_min'] = lastSecMin;
    }
    public get lastSecMin(): number | undefined {
        return this['last_sec_min'];
    }
    public withLastSecMax(lastSecMax: number): CreateExportTaskReq {
        this['last_sec_max'] = lastSecMax;
        return this;
    }
    public set lastSecMax(lastSecMax: number  | undefined) {
        this['last_sec_max'] = lastSecMax;
    }
    public get lastSecMax(): number | undefined {
        return this['last_sec_max'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateExportTaskReqOrderEnum {
    COLLECTTIME = 'collectTime',
    OCCURRENCETIME = 'occurrenceTime',
    LASTSEC = 'lastSec',
    WAITLOCKSTRUCTCOUNT = 'waitLockStructCount',
    HOLDLOCKSTRUCTCOUNT = 'holdLockStructCount'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateExportTaskReqOrderByEnum {
    ASC = 'asc',
    DESC = 'desc'
}
