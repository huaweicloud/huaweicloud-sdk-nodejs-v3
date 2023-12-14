

export class MigrationRabbitExchangeMetadata {
    public vhost?: string;
    public name?: string;
    public type?: string;
    public durable?: boolean;
    public constructor() { 
    }
    public withVhost(vhost: string): MigrationRabbitExchangeMetadata {
        this['vhost'] = vhost;
        return this;
    }
    public withName(name: string): MigrationRabbitExchangeMetadata {
        this['name'] = name;
        return this;
    }
    public withType(type: string): MigrationRabbitExchangeMetadata {
        this['type'] = type;
        return this;
    }
    public withDurable(durable: boolean): MigrationRabbitExchangeMetadata {
        this['durable'] = durable;
        return this;
    }
}