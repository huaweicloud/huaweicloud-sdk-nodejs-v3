

export class ShowFileDetailRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowFileDetailRequest {
        this['id'] = id;
        return this;
    }
}