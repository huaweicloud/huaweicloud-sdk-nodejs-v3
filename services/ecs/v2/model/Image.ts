

export class Image {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): Image {
        this['id'] = id;
        return this;
    }
}