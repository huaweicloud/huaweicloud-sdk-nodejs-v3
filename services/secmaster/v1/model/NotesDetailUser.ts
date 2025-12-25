

export class NotesDetailUser {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): NotesDetailUser {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NotesDetailUser {
        this['name'] = name;
        return this;
    }
}