

export class AllocationPool {
    public end?: string;
    public start?: string;
    public constructor() { 
    }
    public withEnd(end: string): AllocationPool {
        this['end'] = end;
        return this;
    }
    public withStart(start: string): AllocationPool {
        this['start'] = start;
        return this;
    }
}