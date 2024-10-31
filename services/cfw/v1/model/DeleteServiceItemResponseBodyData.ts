

export class DeleteServiceItemResponseBodyData {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): DeleteServiceItemResponseBodyData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DeleteServiceItemResponseBodyData {
        this['name'] = name;
        return this;
    }
}