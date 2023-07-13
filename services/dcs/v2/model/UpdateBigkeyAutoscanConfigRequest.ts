import { AutoscanConfigRequest } from './AutoscanConfigRequest';


export class UpdateBigkeyAutoscanConfigRequest {
    private 'instance_id': string | undefined;
    public body?: AutoscanConfigRequest;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateBigkeyAutoscanConfigRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: AutoscanConfigRequest): UpdateBigkeyAutoscanConfigRequest {
        this['body'] = body;
        return this;
    }
}