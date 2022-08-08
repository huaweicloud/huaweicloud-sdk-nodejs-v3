import { TtsConfig } from './TtsConfig';


export class PostCustomTTSReq {
    public text: string;
    public config?: TtsConfig;
    public constructor(text?: any) { 
        this['text'] = text;
    }
    public withText(text: string): PostCustomTTSReq {
        this['text'] = text;
        return this;
    }
    public withConfig(config: TtsConfig): PostCustomTTSReq {
        this['config'] = config;
        return this;
    }
}