import { UpdateHttpsPasswordSetting } from './UpdateHttpsPasswordSetting';


export class UpdateHttpsPasswordSettingRequest {
    public body?: UpdateHttpsPasswordSetting;
    public constructor() { 
    }
    public withBody(body: UpdateHttpsPasswordSetting): UpdateHttpsPasswordSettingRequest {
        this['body'] = body;
        return this;
    }
}