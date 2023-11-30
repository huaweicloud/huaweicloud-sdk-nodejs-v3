

export class RocketMQProductSupportFeaturesEntity {
    public name?: string;
    public properties?: { [key: string]: string; };
    public constructor() { 
    }
    public withName(name: string): RocketMQProductSupportFeaturesEntity {
        this['name'] = name;
        return this;
    }
    public withProperties(properties: { [key: string]: string; }): RocketMQProductSupportFeaturesEntity {
        this['properties'] = properties;
        return this;
    }
}