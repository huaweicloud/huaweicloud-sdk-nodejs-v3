

export class BatchDeleteIterationsV4RequestBody {
    private 'iteration_ids'?: Array<number>;
    public constructor(iterationIds?: Array<number>) { 
        this['iteration_ids'] = iterationIds;
    }
    public withIterationIds(iterationIds: Array<number>): BatchDeleteIterationsV4RequestBody {
        this['iteration_ids'] = iterationIds;
        return this;
    }
    public set iterationIds(iterationIds: Array<number>  | undefined) {
        this['iteration_ids'] = iterationIds;
    }
    public get iterationIds(): Array<number> | undefined {
        return this['iteration_ids'];
    }
}