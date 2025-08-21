import { StatisticEventsDto } from './StatisticEventsDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryStatisticsStatusResponse extends SdkResponse {
    private 'can_statistics'?: boolean;
    public reason?: ShowRepositoryStatisticsStatusResponseReasonEnum | number;
    public event?: StatisticEventsDto;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withCanStatistics(canStatistics: boolean): ShowRepositoryStatisticsStatusResponse {
        this['can_statistics'] = canStatistics;
        return this;
    }
    public set canStatistics(canStatistics: boolean  | undefined) {
        this['can_statistics'] = canStatistics;
    }
    public get canStatistics(): boolean | undefined {
        return this['can_statistics'];
    }
    public withReason(reason: ShowRepositoryStatisticsStatusResponseReasonEnum | number): ShowRepositoryStatisticsStatusResponse {
        this['reason'] = reason;
        return this;
    }
    public withEvent(event: StatisticEventsDto): ShowRepositoryStatisticsStatusResponse {
        this['event'] = event;
        return this;
    }
    public withXTotal(xTotal: string): ShowRepositoryStatisticsStatusResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRepositoryStatisticsStatusResponseReasonEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
