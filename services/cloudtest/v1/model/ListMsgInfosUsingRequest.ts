import { MsgInfoQuery } from './MsgInfoQuery';


export class ListMsgInfosUsingRequest {
    private 'service_id'?: string;
    public body?: MsgInfoQuery;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): ListMsgInfosUsingRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withBody(body: MsgInfoQuery): ListMsgInfosUsingRequest {
        this['body'] = body;
        return this;
    }
}