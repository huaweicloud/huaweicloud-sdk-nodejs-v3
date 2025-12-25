
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePipeConsumptionResponse extends SdkResponse {
    private 'access_point'?: string;
    private 'dataspace_id'?: string;
    private 'pipe_id'?: string;
    private 'pipe_name'?: string;
    public status?: CreatePipeConsumptionResponseStatusEnum | string;
    public subscription?: string;
    public type?: CreatePipeConsumptionResponseTypeEnum | string;
    public constructor() { 
        super();
    }
    public withAccessPoint(accessPoint: string): CreatePipeConsumptionResponse {
        this['access_point'] = accessPoint;
        return this;
    }
    public set accessPoint(accessPoint: string  | undefined) {
        this['access_point'] = accessPoint;
    }
    public get accessPoint(): string | undefined {
        return this['access_point'];
    }
    public withDataspaceId(dataspaceId: string): CreatePipeConsumptionResponse {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withPipeId(pipeId: string): CreatePipeConsumptionResponse {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withPipeName(pipeName: string): CreatePipeConsumptionResponse {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withStatus(status: CreatePipeConsumptionResponseStatusEnum | string): CreatePipeConsumptionResponse {
        this['status'] = status;
        return this;
    }
    public withSubscription(subscription: string): CreatePipeConsumptionResponse {
        this['subscription'] = subscription;
        return this;
    }
    public withType(type: CreatePipeConsumptionResponseTypeEnum | string): CreatePipeConsumptionResponse {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePipeConsumptionResponseStatusEnum {
    ENABLE = 'enable',
    DISABLE = 'disable'
}
/**
    * @export
    * @enum {string}
    */
export enum CreatePipeConsumptionResponseTypeEnum {
    INTRANET = 'intranet',
    INTERNET = 'internet'
}
