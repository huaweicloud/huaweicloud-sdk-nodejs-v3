import { CommitDto } from './CommitDto';
import { CommitSimpleResultDto } from './CommitSimpleResultDto';
import { DateTitleDto } from './DateTitleDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCommitsResponse extends SdkResponse {
    public commits?: Array<CommitDto>;
    private 'date_title'?: Array<DateTitleDto>;
    public constructor() { 
        super();
    }
    public withCommits(commits: Array<CommitDto>): ListCommitsResponse {
        this['commits'] = commits;
        return this;
    }
    public withDateTitle(dateTitle: Array<DateTitleDto>): ListCommitsResponse {
        this['date_title'] = dateTitle;
        return this;
    }
    public set dateTitle(dateTitle: Array<DateTitleDto>  | undefined) {
        this['date_title'] = dateTitle;
    }
    public get dateTitle(): Array<DateTitleDto> | undefined {
        return this['date_title'];
    }
}