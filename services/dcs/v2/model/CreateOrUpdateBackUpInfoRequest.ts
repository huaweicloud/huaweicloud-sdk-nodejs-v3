import { AdditionalBackupRequest } from './AdditionalBackupRequest';


export class CreateOrUpdateBackUpInfoRequest {
    private 'instance_id'?: string;
    public body?: AdditionalBackupRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateOrUpdateBackUpInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AdditionalBackupRequest): CreateOrUpdateBackUpInfoRequest {
        this['body'] = body;
        return this;
    }
}