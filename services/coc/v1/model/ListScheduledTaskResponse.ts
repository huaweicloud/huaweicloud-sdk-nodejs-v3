import { ScheduledTaskBasicInfo } from './ScheduledTaskBasicInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScheduledTaskResponse extends SdkResponse {
    public count?: number;
    private 'next_maker'?: string;
    private 'scheduled_tasks'?: Array<ScheduledTaskBasicInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListScheduledTaskResponse {
        this['count'] = count;
        return this;
    }
    public withNextMaker(nextMaker: string): ListScheduledTaskResponse {
        this['next_maker'] = nextMaker;
        return this;
    }
    public set nextMaker(nextMaker: string  | undefined) {
        this['next_maker'] = nextMaker;
    }
    public get nextMaker(): string | undefined {
        return this['next_maker'];
    }
    public withScheduledTasks(scheduledTasks: Array<ScheduledTaskBasicInfo>): ListScheduledTaskResponse {
        this['scheduled_tasks'] = scheduledTasks;
        return this;
    }
    public set scheduledTasks(scheduledTasks: Array<ScheduledTaskBasicInfo>  | undefined) {
        this['scheduled_tasks'] = scheduledTasks;
    }
    public get scheduledTasks(): Array<ScheduledTaskBasicInfo> | undefined {
        return this['scheduled_tasks'];
    }
}