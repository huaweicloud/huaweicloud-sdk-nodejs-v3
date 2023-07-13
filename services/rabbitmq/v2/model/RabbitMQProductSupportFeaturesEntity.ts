

export class RabbitMQProductSupportFeaturesEntity {
    public name?: string;
    public properties?: { [key: string]: string; };
    public constructor() { 
    }
    public withName(name: string): RabbitMQProductSupportFeaturesEntity {
        this['name'] = name;
        return this;
    }
    public withProperties(properties: { [key: string]: string; }): RabbitMQProductSupportFeaturesEntity {
        this['properties'] = properties;
        return this;
    }
}