

export class BatchDeleteMemberState {
    public id: string;
    private 'ret_status': string | undefined;
    public constructor(id?: any, retStatus?: any) { 
        this['id'] = id;
        this['ret_status'] = retStatus;
    }
    public withId(id: string): BatchDeleteMemberState {
        this['id'] = id;
        return this;
    }
    public withRetStatus(retStatus: string): BatchDeleteMemberState {
        this['ret_status'] = retStatus;
        return this;
    }
    public set retStatus(retStatus: string | undefined) {
        this['ret_status'] = retStatus;
    }
    public get retStatus() {
        return this['ret_status'];
    }
}