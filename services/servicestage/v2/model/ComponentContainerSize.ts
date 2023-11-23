

export class ComponentContainerSize {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): ComponentContainerSize {
        this['id'] = id;
        return this;
    }
}