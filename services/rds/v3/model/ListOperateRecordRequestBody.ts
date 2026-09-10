

export class ListOperateRecordRequestBody {
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'operate_type'?: string;
    private 'user_name'?: string;
    public level?: string;
    public offset?: string;
    public limit?: string;
    public sort?: string;
    public order?: string;
    public constructor(startTime?: number, endTime?: number) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withStartTime(startTime: number): ListOperateRecordRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListOperateRecordRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withOperateType(operateType: string): ListOperateRecordRequestBody {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withUserName(userName: string): ListOperateRecordRequestBody {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withLevel(level: string): ListOperateRecordRequestBody {
        this['level'] = level;
        return this;
    }
    public withOffset(offset: string): ListOperateRecordRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListOperateRecordRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withSort(sort: string): ListOperateRecordRequestBody {
        this['sort'] = sort;
        return this;
    }
    public withOrder(order: string): ListOperateRecordRequestBody {
        this['order'] = order;
        return this;
    }
}