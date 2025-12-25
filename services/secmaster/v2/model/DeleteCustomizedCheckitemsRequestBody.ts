

export class DeleteCustomizedCheckitemsRequestBody {
    private 'batch_ids'?: Array<string>;
    public constructor(batchIds?: Array<string>) { 
        this['batch_ids'] = batchIds;
    }
    public withBatchIds(batchIds: Array<string>): DeleteCustomizedCheckitemsRequestBody {
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