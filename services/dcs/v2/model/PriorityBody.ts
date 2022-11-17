

export class PriorityBody {
    private 'slave_priority_weight': number | undefined;
    public constructor(slavePriorityWeight?: any) { 
        this['slave_priority_weight'] = slavePriorityWeight;
    }
    public withSlavePriorityWeight(slavePriorityWeight: number): PriorityBody {
        this['slave_priority_weight'] = slavePriorityWeight;
        return this;
    }
    public set slavePriorityWeight(slavePriorityWeight: number | undefined) {
        this['slave_priority_weight'] = slavePriorityWeight;
    }
    public get slavePriorityWeight() {
        return this['slave_priority_weight'];
    }
}