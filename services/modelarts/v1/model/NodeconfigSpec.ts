

export class NodeconfigSpec {
    public configs?: object;
    public constructor(configs?: object) { 
        this['configs'] = configs;
    }
    public withConfigs(configs: object): NodeconfigSpec {
        this['configs'] = configs;
        return this;
    }
}