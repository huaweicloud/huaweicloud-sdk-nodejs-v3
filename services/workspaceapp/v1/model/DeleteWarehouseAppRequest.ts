

export class DeleteWarehouseAppRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteWarehouseAppRequest {
        this['id'] = id;
        return this;
    }
}