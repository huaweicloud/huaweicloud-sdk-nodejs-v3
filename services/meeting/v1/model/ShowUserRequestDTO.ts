

export class ShowUserRequestDTO {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): ShowUserRequestDTO {
        this['id'] = id;
        return this;
    }
}