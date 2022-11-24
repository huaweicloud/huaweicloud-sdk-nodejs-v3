

export class SuccessRspData {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): SuccessRspData {
        this['id'] = id;
        return this;
    }
}