

export class CustomerUpgradeMajorVersionReq {
    public delay?: boolean;
    private 'configuration_id'?: string;
    public constructor() { 
    }
    public withDelay(delay: boolean): CustomerUpgradeMajorVersionReq {
        this['delay'] = delay;
        return this;
    }
    public withConfigurationId(configurationId: string): CustomerUpgradeMajorVersionReq {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
}