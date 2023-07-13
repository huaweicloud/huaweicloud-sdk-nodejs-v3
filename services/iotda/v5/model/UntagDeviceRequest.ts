import { UnbindTagsDTO } from './UnbindTagsDTO';


export class UntagDeviceRequest {
    private 'Instance-Id'?: string | undefined;
    public body?: UnbindTagsDTO;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): UntagDeviceRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withBody(body: UnbindTagsDTO): UntagDeviceRequest {
        this['body'] = body;
        return this;
    }
}