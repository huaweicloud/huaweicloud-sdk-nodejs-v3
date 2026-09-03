import { DeleteTaskParams } from './DeleteTaskParams';


export class DeleteTestsuiteInfosUsingRequest {
    private 'service_id'?: string;
    public body?: DeleteTaskParams;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): DeleteTestsuiteInfosUsingRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withBody(body: DeleteTaskParams): DeleteTestsuiteInfosUsingRequest {
        this['body'] = body;
        return this;
    }
}