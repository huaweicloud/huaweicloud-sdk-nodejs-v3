

export class BatchDeleteSessionsReqBody {
    private 'session_ids'?: Array<string>;
    public constructor(sessionIds?: Array<string>) { 
        this['session_ids'] = sessionIds;
    }
    public withSessionIds(sessionIds: Array<string>): BatchDeleteSessionsReqBody {
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