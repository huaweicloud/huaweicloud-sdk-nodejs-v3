import { MicroserviceImportReq } from './MicroserviceImportReq';


export class ImportMicroserviceRequest {
    private 'instance_id'?: string;
    public body?: MicroserviceImportReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ImportMicroserviceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: MicroserviceImportReq): ImportMicroserviceRequest {
        this['body'] = body;
        return this;
    }
}