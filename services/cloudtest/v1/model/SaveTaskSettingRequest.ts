import { SaveTaskSettingRequestBody } from './SaveTaskSettingRequestBody';


export class SaveTaskSettingRequest {
    private 'service_id'?: string;
    public body?: SaveTaskSettingRequestBody;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): SaveTaskSettingRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withBody(body: SaveTaskSettingRequestBody): SaveTaskSettingRequest {
        this['body'] = body;
        return this;
    }
}