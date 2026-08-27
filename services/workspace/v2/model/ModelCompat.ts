

export class ModelCompat {
    private 'supports_usage_streaming'?: boolean;
    private 'supports_developer_role'?: boolean;
    public constructor() { 
    }
    public withSupportsUsageStreaming(supportsUsageStreaming: boolean): ModelCompat {
        this['supports_usage_streaming'] = supportsUsageStreaming;
        return this;
    }
    public set supportsUsageStreaming(supportsUsageStreaming: boolean  | undefined) {
        this['supports_usage_streaming'] = supportsUsageStreaming;
    }
    public get supportsUsageStreaming(): boolean | undefined {
        return this['supports_usage_streaming'];
    }
    public withSupportsDeveloperRole(supportsDeveloperRole: boolean): ModelCompat {
        this['supports_developer_role'] = supportsDeveloperRole;
        return this;
    }
    public set supportsDeveloperRole(supportsDeveloperRole: boolean  | undefined) {
        this['supports_developer_role'] = supportsDeveloperRole;
    }
    public get supportsDeveloperRole(): boolean | undefined {
        return this['supports_developer_role'];
    }
}