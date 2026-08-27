

export class LoginCaptchaConfig {
    public enabled?: boolean;
    private 'trigger_threshold'?: number;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): LoginCaptchaConfig {
        this['enabled'] = enabled;
        return this;
    }
    public withTriggerThreshold(triggerThreshold: number): LoginCaptchaConfig {
        this['trigger_threshold'] = triggerThreshold;
        return this;
    }
    public set triggerThreshold(triggerThreshold: number  | undefined) {
        this['trigger_threshold'] = triggerThreshold;
    }
    public get triggerThreshold(): number | undefined {
        return this['trigger_threshold'];
    }
}