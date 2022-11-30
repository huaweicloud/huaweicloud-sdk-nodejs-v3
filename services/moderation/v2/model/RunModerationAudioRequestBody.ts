import { RunModerationAudioRequestBodyConfig } from './RunModerationAudioRequestBodyConfig';


export class RunModerationAudioRequestBody {
    public data?: string;
    public url?: string;
    public config: RunModerationAudioRequestBodyConfig;
    public categories?: Array<string>;
    public constructor(config?: any) { 
        this['config'] = config;
    }
    public withData(data: string): RunModerationAudioRequestBody {
        this['data'] = data;
        return this;
    }
    public withUrl(url: string): RunModerationAudioRequestBody {
        this['url'] = url;
        return this;
    }
    public withConfig(config: RunModerationAudioRequestBodyConfig): RunModerationAudioRequestBody {
        this['config'] = config;
        return this;
    }
    public withCategories(categories: Array<string>): RunModerationAudioRequestBody {
        this['categories'] = categories;
        return this;
    }
}