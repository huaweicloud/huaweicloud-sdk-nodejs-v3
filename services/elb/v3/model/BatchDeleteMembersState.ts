

export class BatchDeleteMembersState {
    public id?: string;
    private 'ret_status'?: string;
    public constructor(id?: string, retStatus?: string) { 
        this['id'] = id;
        this['ret_status'] = retStatus;
    }
    public withId(id: string): BatchDeleteMembersState {
        this['id'] = id;
        return this;
    }
    public withRetStatus(retStatus: string): BatchDeleteMembersState {
        this['ret_status'] = retStatus;
        return this;
    }
    public set retStatus(retStatus: string  | undefined) {
        this['ret_status'] = retStatus;
    }
    public get retStatus(): string | undefined {
        return this['ret_status'];
    }
}