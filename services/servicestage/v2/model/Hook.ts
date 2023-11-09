

export class Hook {
    public id?: string;
    public type?: string;
    private 'callback_url'?: string;
    public constructor(id?: string, type?: string, callbackUrl?: string) { 
        this['id'] = id;
        this['type'] = type;
        this['callback_url'] = callbackUrl;
    }
    public withId(id: string): Hook {
        this['id'] = id;
        return this;
    }
    public withType(type: string): Hook {
        this['type'] = type;
        return this;
    }
    public withCallbackUrl(callbackUrl: string): Hook {
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