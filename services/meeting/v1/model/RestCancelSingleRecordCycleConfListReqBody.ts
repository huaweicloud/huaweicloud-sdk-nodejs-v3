

export class RestCancelSingleRecordCycleConfListReqBody {
    public cycleSubConfIDs: Array<string>;
    public constructor(cycleSubConfIDs?: any) { 
        this['cycleSubConfIDs'] = cycleSubConfIDs;
    }
    public withCycleSubConfIDs(cycleSubConfIDs: Array<string>): RestCancelSingleRecordCycleConfListReqBody {
        this['cycleSubConfIDs'] = cycleSubConfIDs;
        return this;
    }
}