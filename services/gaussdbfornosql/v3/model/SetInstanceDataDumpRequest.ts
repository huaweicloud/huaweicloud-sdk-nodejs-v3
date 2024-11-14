import { SetInstanceDataDumpRequestBody } from './SetInstanceDataDumpRequestBody';


export class SetInstanceDataDumpRequest {
    private 'instance_id'?: string;
    public body?: SetInstanceDataDumpRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetInstanceDataDumpRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SetInstanceDataDumpRequestBody): SetInstanceDataDumpRequest {
        this['body'] = body;
        return this;
    }
}