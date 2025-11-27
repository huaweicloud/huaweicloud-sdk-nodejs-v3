

export class ResourceSummary {
    public allocatable?: { [key: string]: object; };
    public allocating?: { [key: string]: object; };
    public allocated?: { [key: string]: object; };
    public capacity?: { [key: string]: object; };
    public constructor() { 
    }
    public withAllocatable(allocatable: { [key: string]: object; }): ResourceSummary {
        this['allocatable'] = allocatable;
        return this;
    }
    public withAllocating(allocating: { [key: string]: object; }): ResourceSummary {
        this['allocating'] = allocating;
        return this;
    }
    public withAllocated(allocated: { [key: string]: object; }): ResourceSummary {
        this['allocated'] = allocated;
        return this;
    }
    public withCapacity(capacity: { [key: string]: object; }): ResourceSummary {
        this['capacity'] = capacity;
        return this;
    }
}