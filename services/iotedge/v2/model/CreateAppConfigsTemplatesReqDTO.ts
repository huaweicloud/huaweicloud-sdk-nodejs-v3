

export class CreateAppConfigsTemplatesReqDTO {
    private 'tpl_id'?: string;
    public name?: string;
    public description?: string;
    private 'config_tabs'?: object;
    private 'default_values'?: object;
    public constructor(tplId?: string, name?: string, description?: string, configTabs?: object) { 
        this['tpl_id'] = tplId;
        this['name'] = name;
        this['description'] = description;
        this['config_tabs'] = configTabs;
    }
    public withTplId(tplId: string): CreateAppConfigsTemplatesReqDTO {
        this['tpl_id'] = tplId;
        return this;
    }
    public set tplId(tplId: string  | undefined) {
        this['tpl_id'] = tplId;
    }
    public get tplId(): string | undefined {
        return this['tpl_id'];
    }
    public withName(name: string): CreateAppConfigsTemplatesReqDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateAppConfigsTemplatesReqDTO {
        this['description'] = description;
        return this;
    }
    public withConfigTabs(configTabs: object): CreateAppConfigsTemplatesReqDTO {
        this['config_tabs'] = configTabs;
        return this;
    }
    public set configTabs(configTabs: object  | undefined) {
        this['config_tabs'] = configTabs;
    }
    public get configTabs(): object | undefined {
        return this['config_tabs'];
    }
    public withDefaultValues(defaultValues: object): CreateAppConfigsTemplatesReqDTO {
        this['default_values'] = defaultValues;
        return this;
    }
    public set defaultValues(defaultValues: object  | undefined) {
        this['default_values'] = defaultValues;
    }
    public get defaultValues(): object | undefined {
        return this['default_values'];
    }
}