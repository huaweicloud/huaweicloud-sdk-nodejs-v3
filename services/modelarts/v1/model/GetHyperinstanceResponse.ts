import { ServerResponse } from './ServerResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetHyperinstanceResponse extends SdkResponse {
    private 'create_at'?: number;
    private 'hps_cluster_id'?: string;
    private 'hps_id'?: string;
    public id?: string;
    public name?: string;
    private 'order_id'?: string;
    public status?: GetHyperinstanceResponseStatusEnum | string;
    public servers?: Array<ServerResponse>;
    private 'update_at'?: number;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCreateAt(createAt: number): GetHyperinstanceResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withHpsClusterId(hpsClusterId: string): GetHyperinstanceResponse {
        this['hps_cluster_id'] = hpsClusterId;
        return this;
    }
    public set hpsClusterId(hpsClusterId: string  | undefined) {
        this['hps_cluster_id'] = hpsClusterId;
    }
    public get hpsClusterId(): string | undefined {
        return this['hps_cluster_id'];
    }
    public withHpsId(hpsId: string): GetHyperinstanceResponse {
        this['hps_id'] = hpsId;
        return this;
    }
    public set hpsId(hpsId: string  | undefined) {
        this['hps_id'] = hpsId;
    }
    public get hpsId(): string | undefined {
        return this['hps_id'];
    }
    public withId(id: string): GetHyperinstanceResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GetHyperinstanceResponse {
        this['name'] = name;
        return this;
    }
    public withOrderId(orderId: string): GetHyperinstanceResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withStatus(status: GetHyperinstanceResponseStatusEnum | string): GetHyperinstanceResponse {
        this['status'] = status;
        return this;
    }
    public withServers(servers: Array<ServerResponse>): GetHyperinstanceResponse {
        this['servers'] = servers;
        return this;
    }
    public withUpdateAt(updateAt: number): GetHyperinstanceResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withXRequestId(xRequestId: string): GetHyperinstanceResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetHyperinstanceResponseStatusEnum {
    PROVISIONING = 'PROVISIONING',
    ACTIVE = 'ACTIVE',
    ERROR = 'ERROR',
    REIMAGING = 'REIMAGING',
    TERMINATING = 'TERMINATING',
    TERMINATED = 'TERMINATED'
}
