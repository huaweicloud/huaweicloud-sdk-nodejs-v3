

export class ScalingPolicyBySession {
    private 'session_usage_threshold'?: number;
    private 'shrink_after_session_idle_minutes'?: number;
    public constructor(sessionUsageThreshold?: number, shrinkAfterSessionIdleMinutes?: number) { 
        this['session_usage_threshold'] = sessionUsageThreshold;
        this['shrink_after_session_idle_minutes'] = shrinkAfterSessionIdleMinutes;
    }
    public withSessionUsageThreshold(sessionUsageThreshold: number): ScalingPolicyBySession {
        this['session_usage_threshold'] = sessionUsageThreshold;
        return this;
    }
    public set sessionUsageThreshold(sessionUsageThreshold: number  | undefined) {
        this['session_usage_threshold'] = sessionUsageThreshold;
    }
    public get sessionUsageThreshold(): number | undefined {
        return this['session_usage_threshold'];
    }
    public withShrinkAfterSessionIdleMinutes(shrinkAfterSessionIdleMinutes: number): ScalingPolicyBySession {
        this['shrink_after_session_idle_minutes'] = shrinkAfterSessionIdleMinutes;
        return this;
    }
    public set shrinkAfterSessionIdleMinutes(shrinkAfterSessionIdleMinutes: number  | undefined) {
        this['shrink_after_session_idle_minutes'] = shrinkAfterSessionIdleMinutes;
    }
    public get shrinkAfterSessionIdleMinutes(): number | undefined {
        return this['shrink_after_session_idle_minutes'];
    }
}