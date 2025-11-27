

export class DeleteVendorAccountRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteVendorAccountRequest {
        this['id'] = id;
        return this;
    }
}