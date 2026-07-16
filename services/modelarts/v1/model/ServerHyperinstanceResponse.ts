import { ServerResponse } from './ServerResponse';


export class ServerHyperinstanceResponse {
    private 'create_at'?: number;
    private 'hps_cluster_id'?: string;
    private 'hps_id'?: string;
    public id?: string;
    public name?: string;
    private 'order_id'?: string;
    public status?: ServerHyperinstanceResponseStatusEnum | string;
    public servers?: Array<ServerResponse>;
    private 'update_at'?: number;
    public constructor() { 
    }
    public withCreateAt(createAt: number): ServerHyperinstanceResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withHpsClusterId(hpsClusterId: string): ServerHyperinstanceResponse {
        this['hps_cluster_id'] = hpsClusterId;
        return this;
    }
    public set hpsClusterId(hpsClusterId: string  | undefined) {
        this['hps_cluster_id'] = hpsClusterId;
    }
    public get hpsClusterId(): string | undefined {
        return this['hps_cluster_id'];
    }
    public withHpsId(hpsId: string): ServerHyperinstanceResponse {
        this['hps_id'] = hpsId;
        return this;
    }
    public set hpsId(hpsId: string  | undefined) {
        this['hps_id'] = hpsId;
    }
    public get hpsId(): string | undefined {
        return this['hps_id'];
    }
    public withId(id: string): ServerHyperinstanceResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ServerHyperinstanceResponse {
        this['name'] = name;
        return this;
    }
    public withOrderId(orderId: string): ServerHyperinstanceResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withStatus(status: ServerHyperinstanceResponseStatusEnum | string): ServerHyperinstanceResponse {
        this['status'] = status;
        return this;
    }
    public withServers(servers: Array<ServerResponse>): ServerHyperinstanceResponse {
        this['servers'] = servers;
        return this;
    }
    public withUpdateAt(updateAt: number): ServerHyperinstanceResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ServerHyperinstanceResponseStatusEnum {
    PROVISIONING = 'PROVISIONING',
    ACTIVE = 'ACTIVE',
    ERROR = 'ERROR',
    REIMAGING = 'REIMAGING',
    TERMINATING = 'TERMINATING',
    TERMINATED = 'TERMINATED'
}
