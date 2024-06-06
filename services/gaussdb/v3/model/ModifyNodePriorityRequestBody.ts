

export class ModifyNodePriorityRequestBody {
    public priority?: string;
    public constructor(priority?: string) { 
        this['priority'] = priority;
    }
    public withPriority(priority: string): ModifyNodePriorityRequestBody {
        this['priority'] = priority;
        return this;
    }
}