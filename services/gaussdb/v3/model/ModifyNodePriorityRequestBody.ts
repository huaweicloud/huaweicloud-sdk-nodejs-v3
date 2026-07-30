

export class ModifyNodePriorityRequestBody {
    public priority?: number;
    public constructor(priority?: number) { 
        this['priority'] = priority;
    }
    public withPriority(priority: number): ModifyNodePriorityRequestBody {
        this['priority'] = priority;
        return this;
    }
}