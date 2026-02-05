

export class BatchModifyReadAndWriteStrategyRequest {
    private 'read_weight_list'?: Array<{ [key: string]: number; }>;
    public constructor() { 
    }
    public withReadWeightList(readWeightList: Array<{ [key: string]: number; }>): BatchModifyReadAndWriteStrategyRequest {
        this['read_weight_list'] = readWeightList;
        return this;
    }
    public set readWeightList(readWeightList: Array<{ [key: string]: number; }>  | undefined) {
        this['read_weight_list'] = readWeightList;
    }
    public get readWeightList(): Array<{ [key: string]: number; }> | undefined {
        return this['read_weight_list'];
    }
}