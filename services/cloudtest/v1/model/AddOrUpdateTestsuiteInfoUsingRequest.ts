import { TaskInfoV4VoReq } from './TaskInfoV4VoReq';


export class AddOrUpdateTestsuiteInfoUsingRequest {
    private 'service_id'?: string;
    public body?: TaskInfoV4VoReq;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): AddOrUpdateTestsuiteInfoUsingRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withBody(body: TaskInfoV4VoReq): AddOrUpdateTestsuiteInfoUsingRequest {
        this['body'] = body;
        return this;
    }
}