

export class CommonResponseDTOData {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): CommonResponseDTOData {
        this['id'] = id;
        return this;
    }
}