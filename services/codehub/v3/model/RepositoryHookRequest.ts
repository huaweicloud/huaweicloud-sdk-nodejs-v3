

export class RepositoryHookRequest {
    private 'hook_url'?: string;
    public service?: string;
    public token?: string;
    private 'hook_events'?: Array<string>;
    public constructor(hookUrl?: string, service?: string, hookEvents?: Array<string>) { 
        this['hook_url'] = hookUrl;
        this['service'] = service;
        this['hook_events'] = hookEvents;
    }
    public withHookUrl(hookUrl: string): RepositoryHookRequest {
        this['hook_url'] = hookUrl;
        return this;
    }
    public set hookUrl(hookUrl: string  | undefined) {
        this['hook_url'] = hookUrl;
    }
    public get hookUrl(): string | undefined {
        return this['hook_url'];
    }
    public withService(service: string): RepositoryHookRequest {
        this['service'] = service;
        return this;
    }
    public withToken(token: string): RepositoryHookRequest {
        this['token'] = token;
        return this;
    }
    public withHookEvents(hookEvents: Array<string>): RepositoryHookRequest {
        this['hook_events'] = hookEvents;
        return this;
    }
    public set hookEvents(hookEvents: Array<string>  | undefined) {
        this['hook_events'] = hookEvents;
    }
    public get hookEvents(): Array<string> | undefined {
        return this['hook_events'];
    }
}