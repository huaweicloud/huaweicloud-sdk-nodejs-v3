

export class DatabaseObjectVO {
    public id?: string;
    public select?: string;
    public constructor() { 
    }
    public withId(id: string): DatabaseObjectVO {
        this['id'] = id;
        return this;
    }
    public withSelect(select: string): DatabaseObjectVO {
        this['select'] = select;
        return this;
    }
}