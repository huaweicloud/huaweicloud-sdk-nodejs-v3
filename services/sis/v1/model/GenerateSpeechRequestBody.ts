import { GenerateSpeechRequestBodyConfig } from './GenerateSpeechRequestBodyConfig';


export class GenerateSpeechRequestBody {
    public text?: string;
    public config?: GenerateSpeechRequestBodyConfig;
    public constructor(text?: string, config?: GenerateSpeechRequestBodyConfig) { 
        this['text'] = text;
        this['config'] = config;
    }
    public withText(text: string): GenerateSpeechRequestBody {
        this['text'] = text;
        return this;
    }
    public withConfig(config: GenerateSpeechRequestBodyConfig): GenerateSpeechRequestBody {
        this['config'] = config;
        return this;
    }
}