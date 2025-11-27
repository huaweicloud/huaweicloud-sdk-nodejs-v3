

export class ConfigurationPrimitiveTypeHolderConfiguration {
    private 'target_stacks'?: ConfigurationPrimitiveTypeHolderConfigurationTargetStacksEnum | string;
    private 'failure_mode'?: ConfigurationPrimitiveTypeHolderConfigurationFailureModeEnum | string;
    public constructor() { 
    }
    public withTargetStacks(targetStacks: ConfigurationPrimitiveTypeHolderConfigurationTargetStacksEnum | string): ConfigurationPrimitiveTypeHolderConfiguration {
        this['target_stacks'] = targetStacks;
        return this;
    }
    public set targetStacks(targetStacks: ConfigurationPrimitiveTypeHolderConfigurationTargetStacksEnum | string  | undefined) {
        this['target_stacks'] = targetStacks;
    }
    public get targetStacks(): ConfigurationPrimitiveTypeHolderConfigurationTargetStacksEnum | string | undefined {
        return this['target_stacks'];
    }
    public withFailureMode(failureMode: ConfigurationPrimitiveTypeHolderConfigurationFailureModeEnum | string): ConfigurationPrimitiveTypeHolderConfiguration {
        this['failure_mode'] = failureMode;
        return this;
    }
    public set failureMode(failureMode: ConfigurationPrimitiveTypeHolderConfigurationFailureModeEnum | string  | undefined) {
        this['failure_mode'] = failureMode;
    }
    public get failureMode(): ConfigurationPrimitiveTypeHolderConfigurationFailureModeEnum | string | undefined {
        return this['failure_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfigurationPrimitiveTypeHolderConfigurationTargetStacksEnum {
    NONE = 'NONE',
    ALL = 'ALL'
}
/**
    * @export
    * @enum {string}
    */
export enum ConfigurationPrimitiveTypeHolderConfigurationFailureModeEnum {
    WARN = 'WARN',
    FAIL = 'FAIL'
}
