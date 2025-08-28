

export class GetDatabases {
    public dbslot?: number;
    public name?: string;
    public status?: string;
    public created?: number;
    public updated?: number;
    public id?: string;
    public idName?: string;
    public constructor(dbslot?: number, name?: string, status?: string, created?: number, updated?: number, id?: string, idName?: string) { 
        this['dbslot'] = dbslot;
        this['name'] = name;
        this['status'] = status;
        this['created'] = created;
        this['updated'] = updated;
        this['id'] = id;
        this['idName'] = idName;
    }
    public withDbslot(dbslot: number): GetDatabases {
        this['dbslot'] = dbslot;
        return this;
    }
    public withName(name: string): GetDatabases {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): GetDatabases {
        this['status'] = status;
        return this;
    }
    public withCreated(created: number): GetDatabases {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: number): GetDatabases {
        this['updated'] = updated;
        return this;
    }
    public withId(id: string): GetDatabases {
        this['id'] = id;
        return this;
    }
    public withIdName(idName: string): GetDatabases {
        this['idName'] = idName;
        return this;
    }
}