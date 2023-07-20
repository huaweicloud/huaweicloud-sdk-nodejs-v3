import { GetQuerySearchCriteriasBody } from './GetQuerySearchCriteriasBody';


export class SearchCriteriasBody {
    public criterias?: Array<GetQuerySearchCriteriasBody>;
    private 'log_stream_id'?: string;
    private 'log_stream_name'?: string;
    public constructor(criterias?: Array<GetQuerySearchCriteriasBody>) { 
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
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): SearchCriteriasBody {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
}