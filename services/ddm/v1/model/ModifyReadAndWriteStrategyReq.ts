

export class ModifyReadAndWriteStrategyReq {
    private 'read_weight'?: object;
    public constructor(readWeight?: object) { 
        this['read_weight'] = readWeight;
    }
    public withReadWeight(readWeight: object): ModifyReadAndWriteStrategyReq {
        this['read_weight'] = readWeight;
        return this;
    }
    public set readWeight(readWeight: object  | undefined) {
        this['read_weight'] = readWeight;
    }
    public get readWeight(): object | undefined {
        return this['read_weight'];
    }
}