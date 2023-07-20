import { OpsWindowRequestBody } from './OpsWindowRequestBody';


export class ChangeOpsWindowRequest {
    private 'instance_id'?: string;
    public body?: OpsWindowRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ChangeOpsWindowRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: OpsWindowRequestBody): ChangeOpsWindowRequest {
        this['body'] = body;
        return this;
    }
}