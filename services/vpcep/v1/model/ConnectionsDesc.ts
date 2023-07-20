

export class ConnectionsDesc {
    public id?: string;
    public description?: string;
    public constructor(id?: string, description?: string) { 
        this['id'] = id;
        this['description'] = description;
    }
    public withId(id: string): ConnectionsDesc {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): ConnectionsDesc {
        this['description'] = description;
        return this;
    }
}