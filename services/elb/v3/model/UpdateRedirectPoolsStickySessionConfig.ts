

export class UpdateRedirectPoolsStickySessionConfig {
    public enable?: boolean;
    public timeout?: number;
    public constructor() { 
    }
    public withEnable(enable: boolean): UpdateRedirectPoolsStickySessionConfig {
        this['enable'] = enable;
        return this;
    }
    public withTimeout(timeout: number): UpdateRedirectPoolsStickySessionConfig {
        this['timeout'] = timeout;
        return this;
    }
}