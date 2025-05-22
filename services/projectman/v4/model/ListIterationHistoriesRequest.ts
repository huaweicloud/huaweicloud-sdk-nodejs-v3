

export class ListIterationHistoriesRequest {
    private 'iteration_id'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(iterationId?: number) { 
        this['iteration_id'] = iterationId;
    }
    public withIterationId(iterationId: number): ListIterationHistoriesRequest {
        this['iteration_id'] = iterationId;
        return this;
    }
    public set iterationId(iterationId: number  | undefined) {
        this['iteration_id'] = iterationId;
    }
    public get iterationId(): number | undefined {
        return this['iteration_id'];
    }
    public withOffset(offset: number): ListIterationHistoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListIterationHistoriesRequest {
        this['limit'] = limit;
        return this;
    }
}