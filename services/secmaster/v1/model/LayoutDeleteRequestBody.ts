

export class LayoutDeleteRequestBody {
    public ids?: Array<string>;
    private 'is_delete'?: boolean;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): LayoutDeleteRequestBody {
        this['ids'] = ids;
        return this;
    }
    public withIsDelete(isDelete: boolean): LayoutDeleteRequestBody {
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