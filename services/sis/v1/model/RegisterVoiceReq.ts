import { RegisterVoiceReqConfig } from './RegisterVoiceReqConfig';


export class RegisterVoiceReq {
    public config?: RegisterVoiceReqConfig;
    public data?: string;
    public constructor(config?: RegisterVoiceReqConfig, data?: string) { 
        this['config'] = config;
        this['data'] = data;
    }
    public withConfig(config: RegisterVoiceReqConfig): RegisterVoiceReq {
        this['config'] = config;
        return this;
    }
    public withData(data: string): RegisterVoiceReq {
        this['data'] = data;
        return this;
    }
}