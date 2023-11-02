import { UpdateClientIpTransparentTransmissionRequestBody } from './UpdateClientIpTransparentTransmissionRequestBody';


export class UpdateClientIpTransparentTransmissionRequest {
    private 'instance_id'?: string;
    public body?: UpdateClientIpTransparentTransmissionRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateClientIpTransparentTransmissionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateClientIpTransparentTransmissionRequestBody): UpdateClientIpTransparentTransmissionRequest {
        this['body'] = body;
        return this;
    }
}