import { CheckPutEventsReqSources } from './CheckPutEventsReqSources';


export class CheckPutEventsReq {
    public sources?: Array<CheckPutEventsReqSources>;
    public constructor() { 
    }
    public withSources(sources: Array<CheckPutEventsReqSources>): CheckPutEventsReq {
        this['sources'] = sources;
        return this;
    }
}