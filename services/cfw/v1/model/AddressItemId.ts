

export class AddressItemId {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): AddressItemId {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AddressItemId {
        this['name'] = name;
        return this;
    }
}