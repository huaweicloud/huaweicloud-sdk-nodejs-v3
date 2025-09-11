import { OperationStatisticsBean } from './OperationStatisticsBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountOperationStatisticsResponse extends SdkResponse {
    private 'generate_time'?: string;
    private 'operation_statistics'?: Array<OperationStatisticsBean>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withGenerateTime(generateTime: string): CountOperationStatisticsResponse {
        this['generate_time'] = generateTime;
        return this;
    }
    public set generateTime(generateTime: string  | undefined) {
        this['generate_time'] = generateTime;
    }
    public get generateTime(): string | undefined {
        return this['generate_time'];
    }
    public withOperationStatistics(operationStatistics: Array<OperationStatisticsBean>): CountOperationStatisticsResponse {
        this['operation_statistics'] = operationStatistics;
        return this;
    }
    public set operationStatistics(operationStatistics: Array<OperationStatisticsBean>  | undefined) {
        this['operation_statistics'] = operationStatistics;
    }
    public get operationStatistics(): Array<OperationStatisticsBean> | undefined {
        return this['operation_statistics'];
    }
    public withStatus(status: string): CountOperationStatisticsResponse {
        this['status'] = status;
        return this;
    }
}