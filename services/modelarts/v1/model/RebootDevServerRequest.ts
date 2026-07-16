

export class RebootDevServerRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): RebootDevServerRequest {
        this['id'] = id;
        return this;
    }
}