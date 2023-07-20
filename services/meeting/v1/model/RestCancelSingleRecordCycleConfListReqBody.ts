

export class RestCancelSingleRecordCycleConfListReqBody {
    public cycleSubConfIDs?: Array<string>;
    public constructor(cycleSubConfIDs?: Array<string>) { 
        this['cycleSubConfIDs'] = cycleSubConfIDs;
    }
    public withCycleSubConfIDs(cycleSubConfIDs: Array<string>): RestCancelSingleRecordCycleConfListReqBody {
        this['cycleSubConfIDs'] = cycleSubConfIDs;
        return this;
    }
}