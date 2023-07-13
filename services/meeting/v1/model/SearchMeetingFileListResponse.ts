import { ListMeetingFileResponseDTO } from './ListMeetingFileResponseDTO';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchMeetingFileListResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<ListMeetingFileResponseDTO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchMeetingFileListResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchMeetingFileListResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchMeetingFileListResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<ListMeetingFileResponseDTO>): SearchMeetingFileListResponse {
        this['data'] = data;
        return this;
    }
}