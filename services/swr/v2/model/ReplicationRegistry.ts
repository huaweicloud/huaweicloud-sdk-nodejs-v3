

export class ReplicationRegistry {
    public id?: number;
    public constructor(id?: number) { 
        this['id'] = id;
    }
    public withId(id: number): ReplicationRegistry {
        this['id'] = id;
        return this;
    }
}