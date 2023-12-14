import { ListQueriesDto } from './ListQueriesDto';
import { ListQueriesStatus } from './ListQueriesStatus';


export class ListQueriesData {
    public queries?: Array<ListQueriesDto>;
    public status?: ListQueriesStatus;
    public constructor() { 
    }
    public withQueries(queries: Array<ListQueriesDto>): ListQueriesData {
        this['queries'] = queries;
        return this;
    }
    public withStatus(status: ListQueriesStatus): ListQueriesData {
        this['status'] = status;
        return this;
    }
}