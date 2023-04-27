import { GetQuerySearchCriteriasBody } from './GetQuerySearchCriteriasBody';


export class SearchCriteriasBody {
    public criterias: Array<GetQuerySearchCriteriasBody>;
    private 'log_stream_id'?: string | undefined;
    private 'log_stream_name'?: string | undefined;
    public constructor(criterias?: any) { 
        this['criterias'] = criterias;
    }
    public withCriterias(criterias: Array<GetQuerySearchCriteriasBody>): SearchCriteriasBody {
        this['criterias'] = criterias;
        return this;
    }
    public withLogStreamId(logStreamId: string): SearchCriteriasBody {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId() {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): SearchCriteriasBody {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName() {
        return this['log_stream_name'];
    }
}