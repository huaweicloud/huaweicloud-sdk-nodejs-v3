

export class DeleteIndicatorRequestBody {
    private 'batch_ids'?: Array<string>;
    public constructor() { 
    }
    public withBatchIds(batchIds: Array<string>): DeleteIndicatorRequestBody {
        this['batch_ids'] = batchIds;
        return this;
    }
    public set batchIds(batchIds: Array<string>  | undefined) {
        this['batch_ids'] = batchIds;
    }
    public get batchIds(): Array<string> | undefined {
        return this['batch_ids'];
    }
}