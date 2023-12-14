

export class ModifyDelayConfig {
    private 'play_domain'?: string;
    public app?: string;
    public delay?: number;
    public constructor(playDomain?: string, delay?: number) { 
        this['play_domain'] = playDomain;
        this['delay'] = delay;
    }
    public withPlayDomain(playDomain: string): ModifyDelayConfig {
        this['play_domain'] = playDomain;
        return this;
    }
    public set playDomain(playDomain: string  | undefined) {
        this['play_domain'] = playDomain;
    }
    public get playDomain(): string | undefined {
        return this['play_domain'];
    }
    public withApp(app: string): ModifyDelayConfig {
        this['app'] = app;
        return this;
    }
    public withDelay(delay: number): ModifyDelayConfig {
        this['delay'] = delay;
        return this;
    }
}