
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeLoadbalancerChargeModeResponse extends SdkResponse {
    private 'eip_id_list'?: Array<string>;
    private 'loadbalancer_id_list'?: Array<string>;
    private 'order_id'?: string;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withEipIdList(eipIdList: Array<string>): ChangeLoadbalancerChargeModeResponse {
        this['eip_id_list'] = eipIdList;
        return this;
    }
    public set eipIdList(eipIdList: Array<string>  | undefined) {
        this['eip_id_list'] = eipIdList;
    }
    public get eipIdList(): Array<string> | undefined {
        return this['eip_id_list'];
    }
    public withLoadbalancerIdList(loadbalancerIdList: Array<string>): ChangeLoadbalancerChargeModeResponse {
        this['loadbalancer_id_list'] = loadbalancerIdList;
        return this;
    }
    public set loadbalancerIdList(loadbalancerIdList: Array<string>  | undefined) {
        this['loadbalancer_id_list'] = loadbalancerIdList;
    }
    public get loadbalancerIdList(): Array<string> | undefined {
        return this['loadbalancer_id_list'];
    }
    public withOrderId(orderId: string): ChangeLoadbalancerChargeModeResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withRequestId(requestId: string): ChangeLoadbalancerChargeModeResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}