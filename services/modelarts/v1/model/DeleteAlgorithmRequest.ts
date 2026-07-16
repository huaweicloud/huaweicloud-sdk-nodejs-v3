

export class DeleteAlgorithmRequest {
    private 'algorithm_id'?: string;
    public constructor(algorithmId?: string) { 
        this['algorithm_id'] = algorithmId;
    }
    public withAlgorithmId(algorithmId: string): DeleteAlgorithmRequest {
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