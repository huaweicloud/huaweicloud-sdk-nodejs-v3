import { SearchQueryField } from './SearchQueryField';
import { SearchQueryResult } from './SearchQueryResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTableLogsResponse extends SdkResponse {
    public schema?: Array<SearchQueryField>;
    public datarows?: Array<Array<object>>;
    public total?: number;
    public size?: number;
    public results?: Array<SearchQueryResult>;
    public constructor() { 
        super();
    }
    public withSchema(schema: Array<SearchQueryField>): ListTableLogsResponse {
        this['schema'] = schema;
        return this;
    }
    public withDatarows(datarows: Array<Array<object>>): ListTableLogsResponse {
        this['datarows'] = datarows;
        return this;
    }
    public withTotal(total: number): ListTableLogsResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListTableLogsResponse {
        this['size'] = size;
        return this;
    }
    public withResults(results: Array<SearchQueryResult>): ListTableLogsResponse {
        this['results'] = results;
        return this;
    }
}