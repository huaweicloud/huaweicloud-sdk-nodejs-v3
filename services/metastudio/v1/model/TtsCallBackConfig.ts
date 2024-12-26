

export class TtsCallBackConfig {
    private 'callback_url'?: string;
    public constructor(callbackUrl?: string) { 
        this['callback_url'] = callbackUrl;
    }
    public withCallbackUrl(callbackUrl: string): TtsCallBackConfig {
        this['callback_url'] = callbackUrl;
        return this;
    }
    public set callbackUrl(callbackUrl: string  | undefined) {
        this['callback_url'] = callbackUrl;
    }
    public get callbackUrl(): string | undefined {
        return this['callback_url'];
    }
}