

export class AddressSetId {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): AddressSetId {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AddressSetId {
        this['name'] = name;
        return this;
    }
}