
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPipeConsumptionResponse extends SdkResponse {
    private 'access_point'?: string;
    private 'pipe_name'?: string;
    public status?: ShowPipeConsumptionResponseStatusEnum | string;
    private 'subscription_name'?: string;
    private 'table_id'?: string;
    public constructor() { 
        super();
    }
    public withAccessPoint(accessPoint: string): ShowPipeConsumptionResponse {
        this['access_point'] = accessPoint;
        return this;
    }
    public set accessPoint(accessPoint: string  | undefined) {
        this['access_point'] = accessPoint;
    }
    public get accessPoint(): string | undefined {
        return this['access_point'];
    }
    public withPipeName(pipeName: string): ShowPipeConsumptionResponse {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withStatus(status: ShowPipeConsumptionResponseStatusEnum | string): ShowPipeConsumptionResponse {
        this['status'] = status;
        return this;
    }
    public withSubscriptionName(subscriptionName: string): ShowPipeConsumptionResponse {
        this['subscription_name'] = subscriptionName;
        return this;
    }
    public set subscriptionName(subscriptionName: string  | undefined) {
        this['subscription_name'] = subscriptionName;
    }
    public get subscriptionName(): string | undefined {
        return this['subscription_name'];
    }
    public withTableId(tableId: string): ShowPipeConsumptionResponse {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowPipeConsumptionResponseStatusEnum {
    ENABLE = 'enable',
    DISABLE = 'disable'
}
