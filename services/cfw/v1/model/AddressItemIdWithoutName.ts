

export class AddressItemIdWithoutName {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): AddressItemIdWithoutName {
        this['id'] = id;
        return this;
    }
}