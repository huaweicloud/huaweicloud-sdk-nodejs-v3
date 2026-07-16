import { ServerResponse } from './ServerResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopHyperinstanceResponse extends SdkResponse {
    private 'create_at'?: number;
    private 'hps_cluster_id'?: string;
    private 'hps_id'?: string;
    public id?: string;
    public name?: string;
    private 'order_id'?: string;
    public status?: StopHyperinstanceResponseStatusEnum | string;
    public servers?: Array<ServerResponse>;
    private 'update_at'?: number;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCreateAt(createAt: number): StopHyperinstanceResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withHpsClusterId(hpsClusterId: string): StopHyperinstanceResponse {
        this['hps_cluster_id'] = hpsClusterId;
        return this;
    }
    public set hpsClusterId(hpsClusterId: string  | undefined) {
        this['hps_cluster_id'] = hpsClusterId;
    }
    public get hpsClusterId(): string | undefined {
        return this['hps_cluster_id'];
    }
    public withHpsId(hpsId: string): StopHyperinstanceResponse {
        this['hps_id'] = hpsId;
        return this;
    }
    public set hpsId(hpsId: string  | undefined) {
        this['hps_id'] = hpsId;
    }
    public get hpsId(): string | undefined {
        return this['hps_id'];
    }
    public withId(id: string): StopHyperinstanceResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): StopHyperinstanceResponse {
        this['name'] = name;
        return this;
    }
    public withOrderId(orderId: string): StopHyperinstanceResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withStatus(status: StopHyperinstanceResponseStatusEnum | string): StopHyperinstanceResponse {
        this['status'] = status;
        return this;
    }
    public withServers(servers: Array<ServerResponse>): StopHyperinstanceResponse {
        this['servers'] = servers;
        return this;
    }
    public withUpdateAt(updateAt: number): StopHyperinstanceResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withXRequestId(xRequestId: string): StopHyperinstanceResponse {
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
export enum StopHyperinstanceResponseStatusEnum {
    PROVISIONING = 'PROVISIONING',
    ACTIVE = 'ACTIVE',
    ERROR = 'ERROR',
    REIMAGING = 'REIMAGING',
    TERMINATING = 'TERMINATING',
    TERMINATED = 'TERMINATED'
}
