

export class RedirectPoolsStickySessionConfig {
    public enable?: boolean;
    public timeout?: number;
    public constructor() { 
    }
    public withEnable(enable: boolean): RedirectPoolsStickySessionConfig {
        this['enable'] = enable;
        return this;
    }
    public withTimeout(timeout: number): RedirectPoolsStickySessionConfig {
        this['timeout'] = timeout;
        return this;
    }
}