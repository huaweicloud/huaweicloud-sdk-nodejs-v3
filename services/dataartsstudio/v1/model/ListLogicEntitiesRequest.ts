

export class ListLogicEntitiesRequest {
    public instance?: string;
    public guid?: string;
    public constructor(instance?: string, guid?: string) { 
        this['instance'] = instance;
        this['guid'] = guid;
    }
    public withInstance(instance: string): ListLogicEntitiesRequest {
        this['instance'] = instance;
        return this;
    }
    public withGuid(guid: string): ListLogicEntitiesRequest {
        this['guid'] = guid;
        return this;
    }
}