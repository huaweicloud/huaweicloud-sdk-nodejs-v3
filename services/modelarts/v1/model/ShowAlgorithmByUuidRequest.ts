

export class ShowAlgorithmByUuidRequest {
    private 'algorithm_id'?: string;
    public constructor(algorithmId?: string) { 
        this['algorithm_id'] = algorithmId;
    }
    public withAlgorithmId(algorithmId: string): ShowAlgorithmByUuidRequest {
        this['algorithm_id'] = algorithmId;
        return this;
    }
    public set algorithmId(algorithmId: string  | undefined) {
        this['algorithm_id'] = algorithmId;
    }
    public get algorithmId(): string | undefined {
        return this['algorithm_id'];
    }
}