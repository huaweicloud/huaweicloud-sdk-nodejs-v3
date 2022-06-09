

export class BatchUpdatePriorityRequestBody {
    public id: string;
    public priority: number;
    public constructor(id?: any, priority?: any) { 
        this['id'] = id;
        this['priority'] = priority;
    }
    public withId(id: string): BatchUpdatePriorityRequestBody {
        this['id'] = id;
        return this;
    }
    public withPriority(priority: number): BatchUpdatePriorityRequestBody {
        this['priority'] = priority;
        return this;
    }
}