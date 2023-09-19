

export class Pipelines {
    public name?: string;
    public status?: string;
    public keepAlive?: boolean;
    public events?: string;
    public updateAt?: string;
    public constructor() { 
    }
    public withName(name: string): Pipelines {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): Pipelines {
        this['status'] = status;
        return this;
    }
    public withKeepAlive(keepAlive: boolean): Pipelines {
        this['keepAlive'] = keepAlive;
        return this;
    }
    public withEvents(events: string): Pipelines {
        this['events'] = events;
        return this;
    }
    public withUpdateAt(updateAt: string): Pipelines {
        this['updateAt'] = updateAt;
        return this;
    }
}