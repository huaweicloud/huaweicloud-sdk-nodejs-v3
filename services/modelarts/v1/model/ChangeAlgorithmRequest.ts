import { Algorithm } from './Algorithm';


export class ChangeAlgorithmRequest {
    private 'algorithm_id'?: string;
    public body?: Algorithm;
    public constructor(algorithmId?: string) { 
        this['algorithm_id'] = algorithmId;
    }
    public withAlgorithmId(algorithmId: string): ChangeAlgorithmRequest {
        this['algorithm_id'] = algorithmId;
        return this;
    }
    public set algorithmId(algorithmId: string  | undefined) {
        this['algorithm_id'] = algorithmId;
    }
    public get algorithmId(): string | undefined {
        return this['algorithm_id'];
    }
    public withBody(body: Algorithm): ChangeAlgorithmRequest {
        this['body'] = body;
        return this;
    }
}