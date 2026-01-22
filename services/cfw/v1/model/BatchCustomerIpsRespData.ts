

export class BatchCustomerIpsRespData {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): BatchCustomerIpsRespData {
        this['id'] = id;
        return this;
    }
}