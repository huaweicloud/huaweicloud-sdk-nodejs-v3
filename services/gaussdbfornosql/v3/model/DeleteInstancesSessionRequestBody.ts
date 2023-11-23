

export class DeleteInstancesSessionRequestBody {
    private 'is_all'?: boolean;
    private 'session_ids'?: Array<string>;
    public constructor(isAll?: boolean) { 
        this['is_all'] = isAll;
    }
    public withIsAll(isAll: boolean): DeleteInstancesSessionRequestBody {
        this['is_all'] = isAll;
        return this;
    }
    public set isAll(isAll: boolean  | undefined) {
        this['is_all'] = isAll;
    }
    public get isAll(): boolean | undefined {
        return this['is_all'];
    }
    public withSessionIds(sessionIds: Array<string>): DeleteInstancesSessionRequestBody {
        this['session_ids'] = sessionIds;
        return this;
    }
    public set sessionIds(sessionIds: Array<string>  | undefined) {
        this['session_ids'] = sessionIds;
    }
    public get sessionIds(): Array<string> | undefined {
        return this['session_ids'];
    }
}