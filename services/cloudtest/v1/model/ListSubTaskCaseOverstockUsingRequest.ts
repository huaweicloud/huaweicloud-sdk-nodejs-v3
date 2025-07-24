

export class ListSubTaskCaseOverstockUsingRequest {
    private 'service_id'?: string;
    public startTime?: number;
    public endTime?: number;
    public executorType?: string;
    public label?: string;
    public locationId?: string;
    public pageNum?: number;
    public pageSize?: number;
    public constructor(serviceId?: string, startTime?: number, endTime?: number, label?: string) { 
        this['service_id'] = serviceId;
        this['startTime'] = startTime;
        this['endTime'] = endTime;
        this['label'] = label;
    }
    public withServiceId(serviceId: string): ListSubTaskCaseOverstockUsingRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withStartTime(startTime: number): ListSubTaskCaseOverstockUsingRequest {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: number): ListSubTaskCaseOverstockUsingRequest {
        this['endTime'] = endTime;
        return this;
    }
    public withExecutorType(executorType: string): ListSubTaskCaseOverstockUsingRequest {
        this['executorType'] = executorType;
        return this;
    }
    public withLabel(label: string): ListSubTaskCaseOverstockUsingRequest {
        this['label'] = label;
        return this;
    }
    public withLocationId(locationId: string): ListSubTaskCaseOverstockUsingRequest {
        this['locationId'] = locationId;
        return this;
    }
    public withPageNum(pageNum: number): ListSubTaskCaseOverstockUsingRequest {
        this['pageNum'] = pageNum;
        return this;
    }
    public withPageSize(pageSize: number): ListSubTaskCaseOverstockUsingRequest {
        this['pageSize'] = pageSize;
        return this;
    }
}