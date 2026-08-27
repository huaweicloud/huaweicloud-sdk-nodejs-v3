import { ScheduleEventInfo } from './ScheduleEventInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceScheduleEventsResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'inquiring_count'?: number;
    private 'schedule_count'?: number;
    private 'executing_count'?: number;
    private 'failed_count'?: number;
    public events?: Array<ScheduleEventInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowInstanceScheduleEventsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withInquiringCount(inquiringCount: number): ShowInstanceScheduleEventsResponse {
        this['inquiring_count'] = inquiringCount;
        return this;
    }
    public set inquiringCount(inquiringCount: number  | undefined) {
        this['inquiring_count'] = inquiringCount;
    }
    public get inquiringCount(): number | undefined {
        return this['inquiring_count'];
    }
    public withScheduleCount(scheduleCount: number): ShowInstanceScheduleEventsResponse {
        this['schedule_count'] = scheduleCount;
        return this;
    }
    public set scheduleCount(scheduleCount: number  | undefined) {
        this['schedule_count'] = scheduleCount;
    }
    public get scheduleCount(): number | undefined {
        return this['schedule_count'];
    }
    public withExecutingCount(executingCount: number): ShowInstanceScheduleEventsResponse {
        this['executing_count'] = executingCount;
        return this;
    }
    public set executingCount(executingCount: number  | undefined) {
        this['executing_count'] = executingCount;
    }
    public get executingCount(): number | undefined {
        return this['executing_count'];
    }
    public withFailedCount(failedCount: number): ShowInstanceScheduleEventsResponse {
        this['failed_count'] = failedCount;
        return this;
    }
    public set failedCount(failedCount: number  | undefined) {
        this['failed_count'] = failedCount;
    }
    public get failedCount(): number | undefined {
        return this['failed_count'];
    }
    public withEvents(events: Array<ScheduleEventInfo>): ShowInstanceScheduleEventsResponse {
        this['events'] = events;
        return this;
    }
}