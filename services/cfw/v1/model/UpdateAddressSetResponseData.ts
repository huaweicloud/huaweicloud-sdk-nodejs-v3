

export class UpdateAddressSetResponseData {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): UpdateAddressSetResponseData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateAddressSetResponseData {
        this['name'] = name;
        return this;
    }
}