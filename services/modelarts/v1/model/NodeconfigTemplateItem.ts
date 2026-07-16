

export class NodeconfigTemplateItem {
    public configs?: object;
    public constructor() { 
    }
    public withConfigs(configs: object): NodeconfigTemplateItem {
        this['configs'] = configs;
        return this;
    }
}