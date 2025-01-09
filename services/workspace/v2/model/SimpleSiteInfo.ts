

export class SimpleSiteInfo {
    public id?: string;
    public status?: string;
    public constructor() { 
    }
    public withId(id: string): SimpleSiteInfo {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): SimpleSiteInfo {
        this['status'] = status;
        return this;
    }
}