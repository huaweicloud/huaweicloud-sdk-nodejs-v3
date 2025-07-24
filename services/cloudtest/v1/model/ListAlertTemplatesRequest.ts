

export class ListAlertTemplatesRequest {
    private 'service_id'?: string;
    public name?: string;
    public pageNum?: number;
    public pageSize?: number;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): ListAlertTemplatesRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withName(name: string): ListAlertTemplatesRequest {
        this['name'] = name;
        return this;
    }
    public withPageNum(pageNum: number): ListAlertTemplatesRequest {
        this['pageNum'] = pageNum;
        return this;
    }
    public withPageSize(pageSize: number): ListAlertTemplatesRequest {
        this['pageSize'] = pageSize;
        return this;
    }
}