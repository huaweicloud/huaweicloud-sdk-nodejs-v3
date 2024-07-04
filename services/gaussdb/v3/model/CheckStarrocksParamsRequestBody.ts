

export class CheckStarrocksParamsRequestBody {
    private 'source_configuration_id'?: string;
    public constructor(sourceConfigurationId?: string) { 
        this['source_configuration_id'] = sourceConfigurationId;
    }
    public withSourceConfigurationId(sourceConfigurationId: string): CheckStarrocksParamsRequestBody {
        this['source_configuration_id'] = sourceConfigurationId;
        return this;
    }
    public set sourceConfigurationId(sourceConfigurationId: string  | undefined) {
        this['source_configuration_id'] = sourceConfigurationId;
    }
    public get sourceConfigurationId(): string | undefined {
        return this['source_configuration_id'];
    }
}