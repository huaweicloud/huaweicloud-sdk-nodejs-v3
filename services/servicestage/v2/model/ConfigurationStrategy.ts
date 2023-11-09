

export class ConfigurationStrategy {
    public upgrade?: string;
    public constructor() { 
    }
    public withUpgrade(upgrade: string): ConfigurationStrategy {
        this['upgrade'] = upgrade;
        return this;
    }
}