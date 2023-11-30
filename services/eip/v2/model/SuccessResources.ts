

export class SuccessResources {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): SuccessResources {
        this['id'] = id;
        return this;
    }
}