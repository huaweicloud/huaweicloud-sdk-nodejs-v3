import { DashboardDataQuery } from './DashboardDataQuery';


export class ListLinesUsingRequest {
    private 'service_id'?: string;
    public body?: DashboardDataQuery;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): ListLinesUsingRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withBody(body: DashboardDataQuery): ListLinesUsingRequest {
        this['body'] = body;
        return this;
    }
}