

export class ArchitectureStatistic {
    public children?: Array<ArchitectureStatistic>;
    public count?: number;
    public guid?: string;
    public name?: string;
    public constructor() { 
    }
    public withChildren(children: Array<ArchitectureStatistic>): ArchitectureStatistic {
        this['children'] = children;
        return this;
    }
    public withCount(count: number): ArchitectureStatistic {
        this['count'] = count;
        return this;
    }
    public withGuid(guid: string): ArchitectureStatistic {
        this['guid'] = guid;
        return this;
    }
    public withName(name: string): ArchitectureStatistic {
        this['name'] = name;
        return this;
    }
}