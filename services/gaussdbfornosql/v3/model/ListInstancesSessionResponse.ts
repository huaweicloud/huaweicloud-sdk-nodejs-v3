import { ListInstancesSessionRespondBodySessions } from './ListInstancesSessionRespondBodySessions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesSessionResponse extends SdkResponse {
    private 'total_count'?: number;
    public sessions?: Array<ListInstancesSessionRespondBodySessions>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListInstancesSessionResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withSessions(sessions: Array<ListInstancesSessionRespondBodySessions>): ListInstancesSessionResponse {
        this['sessions'] = sessions;
        return this;
    }
}