

export class DropDatabaseV3Req {
    private 'is_force_delete'?: boolean;
    public constructor() { 
    }
    public withIsForceDelete(isForceDelete: boolean): DropDatabaseV3Req {
        this['is_force_delete'] = isForceDelete;
        return this;
    }
    public set isForceDelete(isForceDelete: boolean  | undefined) {
        this['is_force_delete'] = isForceDelete;
    }
    public get isForceDelete(): boolean | undefined {
        return this['is_force_delete'];
    }
}