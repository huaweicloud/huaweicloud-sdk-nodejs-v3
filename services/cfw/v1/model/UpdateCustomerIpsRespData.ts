

export class UpdateCustomerIpsRespData {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): UpdateCustomerIpsRespData {
        this['id'] = id;
        return this;
    }
}