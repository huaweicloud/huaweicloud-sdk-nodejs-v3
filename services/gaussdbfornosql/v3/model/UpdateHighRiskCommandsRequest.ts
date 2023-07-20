import { RenameHighRiskCommandsRequest } from './RenameHighRiskCommandsRequest';


export class UpdateHighRiskCommandsRequest {
    private 'instance_id'?: string;
    public body?: RenameHighRiskCommandsRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateHighRiskCommandsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RenameHighRiskCommandsRequest): UpdateHighRiskCommandsRequest {
        this['body'] = body;
        return this;
    }
}