import { BugStatisticResponseV4 } from './BugStatisticResponseV4';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectBugStaticsV4Response extends SdkResponse {
    private 'bug_statistics'?: Array<BugStatisticResponseV4>;
    public constructor() { 
        super();
    }
    public withBugStatistics(bugStatistics: Array<BugStatisticResponseV4>): ListProjectBugStaticsV4Response {
        this['bug_statistics'] = bugStatistics;
        return this;
    }
    public set bugStatistics(bugStatistics: Array<BugStatisticResponseV4>  | undefined) {
        this['bug_statistics'] = bugStatistics;
    }
    public get bugStatistics(): Array<BugStatisticResponseV4> | undefined {
        return this['bug_statistics'];
    }
}