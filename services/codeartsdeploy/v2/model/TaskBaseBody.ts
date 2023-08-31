

export class TaskBaseBody {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): TaskBaseBody {
        this['id'] = id;
        return this;
    }
}