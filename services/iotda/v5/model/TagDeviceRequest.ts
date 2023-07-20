import { BindTagsDTO } from './BindTagsDTO';


export class TagDeviceRequest {
    private 'Instance-Id'?: string;
    public body?: BindTagsDTO;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): TagDeviceRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: BindTagsDTO): TagDeviceRequest {
        this['body'] = body;
        return this;
    }
}