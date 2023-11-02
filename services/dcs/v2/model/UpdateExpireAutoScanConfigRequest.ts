import { UpdateAutoScanConfigRequestBody } from './UpdateAutoScanConfigRequestBody';


export class UpdateExpireAutoScanConfigRequest {
    private 'instance_id'?: string;
    public body?: UpdateAutoScanConfigRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateExpireAutoScanConfigRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateAutoScanConfigRequestBody): UpdateExpireAutoScanConfigRequest {
        this['body'] = body;
        return this;
    }
}