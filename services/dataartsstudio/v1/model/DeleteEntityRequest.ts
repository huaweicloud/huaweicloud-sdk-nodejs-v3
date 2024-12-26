

export class DeleteEntityRequest {
    public instance?: string;
    public guid?: string;
    public constructor(instance?: string, guid?: string) { 
        this['instance'] = instance;
        this['guid'] = guid;
    }
    public withInstance(instance: string): DeleteEntityRequest {
        this['instance'] = instance;
        return this;
    }
    public withGuid(guid: string): DeleteEntityRequest {
        this['guid'] = guid;
        return this;
    }
}