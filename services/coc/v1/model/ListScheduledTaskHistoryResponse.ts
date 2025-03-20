import { ScheduledTaskHistory } from './ScheduledTaskHistory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScheduledTaskHistoryResponse extends SdkResponse {
    public count?: number;
    private 'next_maker'?: string;
    private 'scheduled_task_history_list'?: Array<ScheduledTaskHistory>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListScheduledTaskHistoryResponse {
        this['count'] = count;
        return this;
    }
    public withNextMaker(nextMaker: string): ListScheduledTaskHistoryResponse {
        this['next_maker'] = nextMaker;
        return this;
    }
    public set nextMaker(nextMaker: string  | undefined) {
        this['next_maker'] = nextMaker;
    }
    public get nextMaker(): string | undefined {
        return this['next_maker'];
    }
    public withScheduledTaskHistoryList(scheduledTaskHistoryList: Array<ScheduledTaskHistory>): ListScheduledTaskHistoryResponse {
        this['scheduled_task_history_list'] = scheduledTaskHistoryList;
        return this;
    }
    public set scheduledTaskHistoryList(scheduledTaskHistoryList: Array<ScheduledTaskHistory>  | undefined) {
        this['scheduled_task_history_list'] = scheduledTaskHistoryList;
    }
    public get scheduledTaskHistoryList(): Array<ScheduledTaskHistory> | undefined {
        return this['scheduled_task_history_list'];
    }
}