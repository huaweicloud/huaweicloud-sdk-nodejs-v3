

export class CatalogueDeleteRequestBody {
    private 'batch_ids'?: Array<string>;
    private 'is_delete'?: boolean;
    public constructor() { 
    }
    public withBatchIds(batchIds: Array<string>): CatalogueDeleteRequestBody {
        this['batch_ids'] = batchIds;
        return this;
    }
    public set batchIds(batchIds: Array<string>  | undefined) {
        this['batch_ids'] = batchIds;
    }
    public get batchIds(): Array<string> | undefined {
        return this['batch_ids'];
    }
    public withIsDelete(isDelete: boolean): CatalogueDeleteRequestBody {
        this['is_delete'] = isDelete;
        return this;
    }
    public set isDelete(isDelete: boolean  | undefined) {
        this['is_delete'] = isDelete;
    }
    public get isDelete(): boolean | undefined {
        return this['is_delete'];
    }
}