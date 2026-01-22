

export class CreateCustomerIpsRespData {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): CreateCustomerIpsRespData {
        this['id'] = id;
        return this;
    }
}