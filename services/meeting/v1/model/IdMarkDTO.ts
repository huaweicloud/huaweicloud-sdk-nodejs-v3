

export class IdMarkDTO {
    public id?: string;
    public mark?: string;
    public constructor() { 
    }
    public withId(id: string): IdMarkDTO {
        this['id'] = id;
        return this;
    }
    public withMark(mark: string): IdMarkDTO {
        this['mark'] = mark;
        return this;
    }
}