

export class ListDeadLockDetailRequest {
    private 'instance_id'?: string;
    private 'db_name'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'cur_page'?: number;
    private 'per_page'?: number;
    public constructor(instanceId?: string, dbName?: string, startTime?: number, endTime?: number, curPage?: number, perPage?: number) { 
        this['instance_id'] = instanceId;
        this['db_name'] = dbName;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['cur_page'] = curPage;
        this['per_page'] = perPage;
    }
    public withInstanceId(instanceId: string): ListDeadLockDetailRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbName(dbName: string): ListDeadLockDetailRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withStartTime(startTime: number): ListDeadLockDetailRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListDeadLockDetailRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withCurPage(curPage: number): ListDeadLockDetailRequest {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: number): ListDeadLockDetailRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
}