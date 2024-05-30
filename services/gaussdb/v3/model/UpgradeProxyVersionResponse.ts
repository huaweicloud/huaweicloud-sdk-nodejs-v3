import { ProxyUpgradeVersionDetail } from './ProxyUpgradeVersionDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpgradeProxyVersionResponse extends SdkResponse {
    private 'update_result'?: Array<ProxyUpgradeVersionDetail>;
    public constructor() { 
        super();
    }
    public withUpdateResult(updateResult: Array<ProxyUpgradeVersionDetail>): UpgradeProxyVersionResponse {
        this['update_result'] = updateResult;
        return this;
    }
    public set updateResult(updateResult: Array<ProxyUpgradeVersionDetail>  | undefined) {
        this['update_result'] = updateResult;
    }
    public get updateResult(): Array<ProxyUpgradeVersionDetail> | undefined {
        return this['update_result'];
    }
}