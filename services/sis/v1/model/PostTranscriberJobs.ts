import { TranscriberConfig } from './TranscriberConfig';


export class PostTranscriberJobs {
    public config?: TranscriberConfig;
    private 'data_url'?: string;
    public constructor(config?: TranscriberConfig, dataUrl?: string) { 
        this['config'] = config;
        this['data_url'] = dataUrl;
    }
    public withConfig(config: TranscriberConfig): PostTranscriberJobs {
        this['config'] = config;
        return this;
    }
    public withDataUrl(dataUrl: string): PostTranscriberJobs {
        this['data_url'] = dataUrl;
        return this;
    }
    public set dataUrl(dataUrl: string  | undefined) {
        this['data_url'] = dataUrl;
    }
    public get dataUrl(): string | undefined {
        return this['data_url'];
    }
}