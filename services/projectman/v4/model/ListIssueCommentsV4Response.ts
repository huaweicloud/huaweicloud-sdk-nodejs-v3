import { IssueCommentV4 } from './IssueCommentV4';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIssueCommentsV4Response extends SdkResponse {
    public total?: number;
    public comments?: Array<IssueCommentV4>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListIssueCommentsV4Response {
        this['total'] = total;
        return this;
    }
    public withComments(comments: Array<IssueCommentV4>): ListIssueCommentsV4Response {
        this['comments'] = comments;
        return this;
    }
}