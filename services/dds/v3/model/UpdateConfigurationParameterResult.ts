

export class UpdateConfigurationParameterResult {
    private 'entity_id'?: string;
    private 'parameter_values'?: { [key: string]: string; };
    public constructor(entityId?: string, parameterValues?: { [key: string]: string; }) { 
        this['entity_id'] = entityId;
        this['parameter_values'] = parameterValues;
    }
    public withEntityId(entityId: string): UpdateConfigurationParameterResult {
        this['entity_id'] = entityId;
        return this;
    }
    public set entityId(entityId: string  | undefined) {
        this['entity_id'] = entityId;
    }
    public get entityId(): string | undefined {
        return this['entity_id'];
    }
    public withParameterValues(parameterValues: { [key: string]: string; }): UpdateConfigurationParameterResult {
        this['parameter_values'] = parameterValues;
        return this;
    }
    public set parameterValues(parameterValues: { [key: string]: string; }  | undefined) {
        this['parameter_values'] = parameterValues;
    }
    public get parameterValues(): { [key: string]: string; } | undefined {
        return this['parameter_values'];
    }
}