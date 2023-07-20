import { UpdateConfigurationParameterResult } from './UpdateConfigurationParameterResult';


export class UpdateEntityConfigurationRequest {
    private 'instance_id'?: string;
    public body?: UpdateConfigurationParameterResult;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateEntityConfigurationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateConfigurationParameterResult): UpdateEntityConfigurationRequest {
        this['body'] = body;
        return this;
    }
}