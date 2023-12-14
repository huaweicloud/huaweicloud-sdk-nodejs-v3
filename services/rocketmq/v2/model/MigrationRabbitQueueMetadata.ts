

export class MigrationRabbitQueueMetadata {
    public vhost?: string;
    public name?: string;
    public durable?: boolean;
    public constructor() { 
    }
    public withVhost(vhost: string): MigrationRabbitQueueMetadata {
        this['vhost'] = vhost;
        return this;
    }
    public withName(name: string): MigrationRabbitQueueMetadata {
        this['name'] = name;
        return this;
    }
    public withDurable(durable: boolean): MigrationRabbitQueueMetadata {
        this['durable'] = durable;
        return this;
    }
}