import { Chart } from './Chart';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIterationV4Response extends SdkResponse {
    private 'begin_time'?: string;
    public charts?: Array<Chart>;
    private 'closed_total'?: number;
    private 'created_time'?: string;
    private 'end_time'?: string;
    private 'have_task'?: boolean;
    private 'iteration_id'?: number;
    public name?: string;
    private 'opened_total'?: number;
    public progress?: string;
    public total?: number;
    private 'updated_time'?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withBeginTime(beginTime: string): ShowIterationV4Response {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withCharts(charts: Array<Chart>): ShowIterationV4Response {
        this['charts'] = charts;
        return this;
    }
    public withClosedTotal(closedTotal: number): ShowIterationV4Response {
        this['closed_total'] = closedTotal;
        return this;
    }
    public set closedTotal(closedTotal: number  | undefined) {
        this['closed_total'] = closedTotal;
    }
    public get closedTotal(): number | undefined {
        return this['closed_total'];
    }
    public withCreatedTime(createdTime: string): ShowIterationV4Response {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withEndTime(endTime: string): ShowIterationV4Response {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withHaveTask(haveTask: boolean): ShowIterationV4Response {
        this['have_task'] = haveTask;
        return this;
    }
    public set haveTask(haveTask: boolean  | undefined) {
        this['have_task'] = haveTask;
    }
    public get haveTask(): boolean | undefined {
        return this['have_task'];
    }
    public withIterationId(iterationId: number): ShowIterationV4Response {
        this['iteration_id'] = iterationId;
        return this;
    }
    public set iterationId(iterationId: number  | undefined) {
        this['iteration_id'] = iterationId;
    }
    public get iterationId(): number | undefined {
        return this['iteration_id'];
    }
    public withName(name: string): ShowIterationV4Response {
        this['name'] = name;
        return this;
    }
    public withOpenedTotal(openedTotal: number): ShowIterationV4Response {
        this['opened_total'] = openedTotal;
        return this;
    }
    public set openedTotal(openedTotal: number  | undefined) {
        this['opened_total'] = openedTotal;
    }
    public get openedTotal(): number | undefined {
        return this['opened_total'];
    }
    public withProgress(progress: string): ShowIterationV4Response {
        this['progress'] = progress;
        return this;
    }
    public withTotal(total: number): ShowIterationV4Response {
        this['total'] = total;
        return this;
    }
    public withUpdatedTime(updatedTime: string): ShowIterationV4Response {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withStatus(status: string): ShowIterationV4Response {
        this['status'] = status;
        return this;
    }
}