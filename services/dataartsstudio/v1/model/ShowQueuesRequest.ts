

export class ShowQueuesRequest {
    public instance?: string;
    public constructor(instance?: string) { 
        this['instance'] = instance;
    }
    public withInstance(instance: string): ShowQueuesRequest {
        this['instance'] = instance;
        return this;
    }
}