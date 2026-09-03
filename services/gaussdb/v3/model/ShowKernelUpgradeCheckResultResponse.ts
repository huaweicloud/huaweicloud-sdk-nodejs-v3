import { UpgradeDatabasePrecheckResult } from './UpgradeDatabasePrecheckResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKernelUpgradeCheckResultResponse extends SdkResponse {
    private 'upgrade_precheck_result'?: string;
    private 'updated_at'?: number;
    private 'upgrade_precheck_detail'?: Array<UpgradeDatabasePrecheckResult>;
    public constructor() { 
        super();
    }
    public withUpgradePrecheckResult(upgradePrecheckResult: string): ShowKernelUpgradeCheckResultResponse {
        this['upgrade_precheck_result'] = upgradePrecheckResult;
        return this;
    }
    public set upgradePrecheckResult(upgradePrecheckResult: string  | undefined) {
        this['upgrade_precheck_result'] = upgradePrecheckResult;
    }
    public get upgradePrecheckResult(): string | undefined {
        return this['upgrade_precheck_result'];
    }
    public withUpdatedAt(updatedAt: number): ShowKernelUpgradeCheckResultResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: number  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): number | undefined {
        return this['updated_at'];
    }
    public withUpgradePrecheckDetail(upgradePrecheckDetail: Array<UpgradeDatabasePrecheckResult>): ShowKernelUpgradeCheckResultResponse {
        this['upgrade_precheck_detail'] = upgradePrecheckDetail;
        return this;
    }
    public set upgradePrecheckDetail(upgradePrecheckDetail: Array<UpgradeDatabasePrecheckResult>  | undefined) {
        this['upgrade_precheck_detail'] = upgradePrecheckDetail;
    }
    public get upgradePrecheckDetail(): Array<UpgradeDatabasePrecheckResult> | undefined {
        return this['upgrade_precheck_detail'];
    }
}