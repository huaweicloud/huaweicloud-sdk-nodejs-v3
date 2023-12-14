

export class DelayConfig {
    public app?: string;
    public delay?: number;
    public constructor() { 
    }
    public withApp(app: string): DelayConfig {
        this['app'] = app;
        return this;
    }
    public withDelay(delay: number): DelayConfig {
        this['delay'] = delay;
        return this;
    }
}