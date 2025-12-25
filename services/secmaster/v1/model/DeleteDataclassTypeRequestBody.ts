

export class DeleteDataclassTypeRequestBody {
    private 'is_delete'?: boolean;
    public ids?: Array<string>;
    public constructor(isDelete?: boolean, ids?: Array<string>) { 
        this['is_delete'] = isDelete;
        this['ids'] = ids;
    }
    public withIsDelete(isDelete: boolean): DeleteDataclassTypeRequestBody {
        this['is_delete'] = isDelete;
        return this;
    }
    public set isDelete(isDelete: boolean  | undefined) {
        this['is_delete'] = isDelete;
    }
    public get isDelete(): boolean | undefined {
        return this['is_delete'];
    }
    public withIds(ids: Array<string>): DeleteDataclassTypeRequestBody {
        this['ids'] = ids;
        return this;
    }
}