import { BridgeAuthInfo } from './BridgeAuthInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddBridgeResponse extends SdkResponse {
    private 'bridge_id'?: string;
    private 'bridge_name'?: string;
    private 'auth_info'?: BridgeAuthInfo;
    private 'create_time'?: string;
    public constructor() { 
        super();
    }
    public withBridgeId(bridgeId: string): AddBridgeResponse {
        this['bridge_id'] = bridgeId;
        return this;
    }
    public set bridgeId(bridgeId: string  | undefined) {
        this['bridge_id'] = bridgeId;
    }
    public get bridgeId(): string | undefined {
        return this['bridge_id'];
    }
    public withBridgeName(bridgeName: string): AddBridgeResponse {
        this['bridge_name'] = bridgeName;
        return this;
    }
    public set bridgeName(bridgeName: string  | undefined) {
        this['bridge_name'] = bridgeName;
    }
    public get bridgeName(): string | undefined {
        return this['bridge_name'];
    }
    public withAuthInfo(authInfo: BridgeAuthInfo): AddBridgeResponse {
        this['auth_info'] = authInfo;
        return this;
    }
    public set authInfo(authInfo: BridgeAuthInfo  | undefined) {
        this['auth_info'] = authInfo;
    }
    public get authInfo(): BridgeAuthInfo | undefined {
        return this['auth_info'];
    }
    public withCreateTime(createTime: string): AddBridgeResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}