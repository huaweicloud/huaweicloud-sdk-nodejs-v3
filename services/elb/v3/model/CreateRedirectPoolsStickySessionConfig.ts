

export class CreateRedirectPoolsStickySessionConfig {
    public enable?: boolean;
    public timeout?: number;
    public constructor() { 
    }
    public withEnable(enable: boolean): CreateRedirectPoolsStickySessionConfig {
        this['enable'] = enable;
        return this;
    }
    public withTimeout(timeout: number): CreateRedirectPoolsStickySessionConfig {
        this['timeout'] = timeout;
        return this;
    }
}