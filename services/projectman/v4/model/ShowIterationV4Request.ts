

export class ShowIterationV4Request {
    private 'iteration_id'?: number;
    public constructor(iterationId?: number) { 
        this['iteration_id'] = iterationId;
    }
    public withIterationId(iterationId: number): ShowIterationV4Request {
        this['iteration_id'] = iterationId;
        return this;
    }
    public set iterationId(iterationId: number  | undefined) {
        this['iteration_id'] = iterationId;
    }
    public get iterationId(): number | undefined {
        return this['iteration_id'];
    }
}