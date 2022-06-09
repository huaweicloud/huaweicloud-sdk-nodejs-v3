
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeLoadbalancerChargeModeResponse extends SdkResponse {
    private 'eip_id_list'?: Array<string> | undefined;
    private 'loadbalancer_id_list'?: Array<string> | undefined;
    private 'order_id'?: string | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withEipIdList(eipIdList: Array<string>): ChangeLoadbalancerChargeModeResponse {
        this['eip_id_list'] = eipIdList;
        return this;
    }
    public set eipIdList(eipIdList: Array<string> | undefined) {
        this['eip_id_list'] = eipIdList;
    }
    public get eipIdList() {
        return this['eip_id_list'];
    }
    public withLoadbalancerIdList(loadbalancerIdList: Array<string>): ChangeLoadbalancerChargeModeResponse {
        this['loadbalancer_id_list'] = loadbalancerIdList;
        return this;
    }
    public set loadbalancerIdList(loadbalancerIdList: Array<string> | undefined) {
        this['loadbalancer_id_list'] = loadbalancerIdList;
    }
    public get loadbalancerIdList() {
        return this['loadbalancer_id_list'];
    }
    public withOrderId(orderId: string): ChangeLoadbalancerChargeModeResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId() {
        return this['order_id'];
    }
    public withRequestId(requestId: string): ChangeLoadbalancerChargeModeResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}