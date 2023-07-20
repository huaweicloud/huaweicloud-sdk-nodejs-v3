

export class CompareConfigurationRequestBody {
    private 'source_configuration_id'?: string;
    private 'target_configuration_id'?: string;
    public constructor(sourceConfigurationId?: string, targetConfigurationId?: string) { 
        this['source_configuration_id'] = sourceConfigurationId;
        this['target_configuration_id'] = targetConfigurationId;
    }
    public withSourceConfigurationId(sourceConfigurationId: string): CompareConfigurationRequestBody {
        this['source_configuration_id'] = sourceConfigurationId;
        return this;
    }
    public set sourceConfigurationId(sourceConfigurationId: string  | undefined) {
        this['source_configuration_id'] = sourceConfigurationId;
    }
    public get sourceConfigurationId(): string | undefined {
        return this['source_configuration_id'];
    }
    public withTargetConfigurationId(targetConfigurationId: string): CompareConfigurationRequestBody {
        this['target_configuration_id'] = targetConfigurationId;
        return this;
    }
    public set targetConfigurationId(targetConfigurationId: string  | undefined) {
        this['target_configuration_id'] = targetConfigurationId;
    }
    public get targetConfigurationId(): string | undefined {
        return this['target_configuration_id'];
    }
}