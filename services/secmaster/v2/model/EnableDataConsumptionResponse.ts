
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableDataConsumptionResponse extends SdkResponse {
    private 'table_name'?: string;
    private 'dataspace_id'?: string;
    private 'pipe_id'?: string;
    private 'pipe_name'?: string;
    public status?: EnableDataConsumptionResponseStatusEnum | string;
    public type?: EnableDataConsumptionResponseTypeEnum | string;
    private 'access_point'?: string;
    public subscription?: string;
    private 'table_id'?: string;
    public constructor() { 
        super();
    }
    public withTableName(tableName: string): EnableDataConsumptionResponse {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withDataspaceId(dataspaceId: string): EnableDataConsumptionResponse {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withPipeId(pipeId: string): EnableDataConsumptionResponse {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withPipeName(pipeName: string): EnableDataConsumptionResponse {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withStatus(status: EnableDataConsumptionResponseStatusEnum | string): EnableDataConsumptionResponse {
        this['status'] = status;
        return this;
    }
    public withType(type: EnableDataConsumptionResponseTypeEnum | string): EnableDataConsumptionResponse {
        this['type'] = type;
        return this;
    }
    public withAccessPoint(accessPoint: string): EnableDataConsumptionResponse {
        this['access_point'] = accessPoint;
        return this;
    }
    public set accessPoint(accessPoint: string  | undefined) {
        this['access_point'] = accessPoint;
    }
    public get accessPoint(): string | undefined {
        return this['access_point'];
    }
    public withSubscription(subscription: string): EnableDataConsumptionResponse {
        this['subscription'] = subscription;
        return this;
    }
    public withTableId(tableId: string): EnableDataConsumptionResponse {
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
export enum EnableDataConsumptionResponseStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
/**
    * @export
    * @enum {string}
    */
export enum EnableDataConsumptionResponseTypeEnum {
    INTERNET = 'INTERNET',
    INTRANET = 'INTRANET'
}
