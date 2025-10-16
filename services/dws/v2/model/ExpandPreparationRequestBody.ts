

export class ExpandPreparationRequestBody {
    private 'num_node'?: number;
    private 'is_retry'?: boolean;
    public constructor(numNode?: number, isRetry?: boolean) { 
        this['num_node'] = numNode;
        this['is_retry'] = isRetry;
    }
    public withNumNode(numNode: number): ExpandPreparationRequestBody {
        this['num_node'] = numNode;
        return this;
    }
    public set numNode(numNode: number  | undefined) {
        this['num_node'] = numNode;
    }
    public get numNode(): number | undefined {
        return this['num_node'];
    }
    public withIsRetry(isRetry: boolean): ExpandPreparationRequestBody {
        this['is_retry'] = isRetry;
        return this;
    }
    public set isRetry(isRetry: boolean  | undefined) {
        this['is_retry'] = isRetry;
    }
    public get isRetry(): boolean | undefined {
        return this['is_retry'];
    }
}