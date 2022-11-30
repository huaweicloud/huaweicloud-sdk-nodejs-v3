

export class ShowTargetPasswordRequest {
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): ShowTargetPasswordRequest {
        this['id'] = id;
        return this;
    }
}