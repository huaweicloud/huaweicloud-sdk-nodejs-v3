

export class DeleteApplicationGroupRequest {
    public id?: string;
    private 'force_delete'?: boolean;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteApplicationGroupRequest {
        this['id'] = id;
        return this;
    }
    public withForceDelete(forceDelete: boolean): DeleteApplicationGroupRequest {
        this['force_delete'] = forceDelete;
        return this;
    }
    public set forceDelete(forceDelete: boolean  | undefined) {
        this['force_delete'] = forceDelete;
    }
    public get forceDelete(): boolean | undefined {
        return this['force_delete'];
    }
}