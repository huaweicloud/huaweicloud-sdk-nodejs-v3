

export class EsListenersResource {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): EsListenersResource {
        this['id'] = id;
        return this;
    }
}