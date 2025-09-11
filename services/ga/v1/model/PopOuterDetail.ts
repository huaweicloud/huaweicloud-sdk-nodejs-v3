

export class PopOuterDetail {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): PopOuterDetail {
        this['id'] = id;
        return this;
    }
}