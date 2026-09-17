import { SlowLogArchiveDto } from './SlowLogArchiveDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSlowLogArchivesResponse extends SdkResponse {
    private 'archive_list'?: Array<SlowLogArchiveDto>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withArchiveList(archiveList: Array<SlowLogArchiveDto>): ListSlowLogArchivesResponse {
        this['archive_list'] = archiveList;
        return this;
    }
    public set archiveList(archiveList: Array<SlowLogArchiveDto>  | undefined) {
        this['archive_list'] = archiveList;
    }
    public get archiveList(): Array<SlowLogArchiveDto> | undefined {
        return this['archive_list'];
    }
    public withTotal(total: number): ListSlowLogArchivesResponse {
        this['total'] = total;
        return this;
    }
}