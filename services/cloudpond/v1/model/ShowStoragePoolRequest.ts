

export class ShowStoragePoolRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowStoragePoolRequest {
        this['id'] = id;
        return this;
    }
}