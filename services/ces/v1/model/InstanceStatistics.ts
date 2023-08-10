

export class InstanceStatistics {
    public unhealth?: number;
    public total?: number;
    private 'type_statistics'?: number;
    public constructor() { 
    }
    public withUnhealth(unhealth: number): InstanceStatistics {
        this['unhealth'] = unhealth;
        return this;
    }
    public withTotal(total: number): InstanceStatistics {
        this['total'] = total;
        return this;
    }
    public withTypeStatistics(typeStatistics: number): InstanceStatistics {
        this['type_statistics'] = typeStatistics;
        return this;
    }
    public set typeStatistics(typeStatistics: number  | undefined) {
        this['type_statistics'] = typeStatistics;
    }
    public get typeStatistics(): number | undefined {
        return this['type_statistics'];
    }
}