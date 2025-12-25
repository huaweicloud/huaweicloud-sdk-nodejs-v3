

export class EnableConsumptionRequestBody {
    private 'pipe_id'?: string;
    public constructor(pipeId?: string) { 
        this['pipe_id'] = pipeId;
    }
    public withPipeId(pipeId: string): EnableConsumptionRequestBody {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
}