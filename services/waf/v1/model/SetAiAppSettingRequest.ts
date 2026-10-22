import { AiAppSettingRequest } from './AiAppSettingRequest';


export class SetAiAppSettingRequest {
    public body?: AiAppSettingRequest;
    public constructor() { 
    }
    public withBody(body: AiAppSettingRequest): SetAiAppSettingRequest {
        this['body'] = body;
        return this;
    }
}