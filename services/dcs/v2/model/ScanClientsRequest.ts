import { ScanClientsRequestBody } from './ScanClientsRequestBody';


export class ScanClientsRequest {
    private 'instance_id'?: string;
    public body?: ScanClientsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ScanClientsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ScanClientsRequestBody): ScanClientsRequest {
        this['body'] = body;
        return this;
    }
}