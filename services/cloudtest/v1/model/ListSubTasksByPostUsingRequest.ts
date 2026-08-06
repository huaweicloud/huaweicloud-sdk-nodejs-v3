import { SubTaskQueryByPageParams } from './SubTaskQueryByPageParams';


export class ListSubTasksByPostUsingRequest {
    private 'service_id'?: string;
    public body?: SubTaskQueryByPageParams;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): ListSubTasksByPostUsingRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withBody(body: SubTaskQueryByPageParams): ListSubTasksByPostUsingRequest {
        this['body'] = body;
        return this;
    }
}