import { Pages } from './Pages';
import { ProgramResponseBase } from './ProgramResponseBase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchProgramsResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<ProgramResponseBase>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchProgramsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchProgramsResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchProgramsResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<ProgramResponseBase>): SearchProgramsResponse {
        this['data'] = data;
        return this;
    }
}