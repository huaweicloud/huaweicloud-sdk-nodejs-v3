

export class DeleteNodeRequestBody {
    private 'delete_ids'?: Array<string>;
    public constructor(deleteIds?: Array<string>) { 
        this['delete_ids'] = deleteIds;
    }
    public withDeleteIds(deleteIds: Array<string>): DeleteNodeRequestBody {
        this['delete_ids'] = deleteIds;
        return this;
    }
    public set deleteIds(deleteIds: Array<string>  | undefined) {
        this['delete_ids'] = deleteIds;
    }
    public get deleteIds(): Array<string> | undefined {
        return this['delete_ids'];
    }
}