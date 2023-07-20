import { Config } from './Config';


export class PostShortAudioReq {
    public config?: Config;
    public data?: string;
    public constructor(config?: Config, data?: string) { 
        this['config'] = config;
        this['data'] = data;
    }
    public withConfig(config: Config): PostShortAudioReq {
        this['config'] = config;
        return this;
    }
    public withData(data: string): PostShortAudioReq {
        this['data'] = data;
        return this;
    }
}