

export class ApiVersion {
    public id?: string;
    public status?: string;
    public updated?: string;
    public version?: string;
    public constructor(id?: string, status?: string, updated?: string, version?: string) { 
        this['id'] = id;
        this['status'] = status;
        this['updated'] = updated;
        this['version'] = version;
    }
    public withId(id: string): ApiVersion {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): ApiVersion {
        this['status'] = status;
        return this;
    }
    public withUpdated(updated: string): ApiVersion {
        this['updated'] = updated;
        return this;
    }
    public withVersion(version: string): ApiVersion {
        this['version'] = version;
        return this;
    }
}