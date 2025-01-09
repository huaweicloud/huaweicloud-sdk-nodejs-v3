import { BatchInquiryChangeRsp } from './BatchInquiryChangeRsp';
import { PeriodBatchUpChangeResourceRsp } from './PeriodBatchUpChangeResourceRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EstimateDesktopPoolResizeResponse extends SdkResponse {
    private 'is_upgrade'?: boolean;
    private 'batch_inquiry_rsp_when_upgrade'?: PeriodBatchUpChangeResourceRsp;
    private 'batch_inquiry_rsp_when_downgrade'?: BatchInquiryChangeRsp;
    public constructor() { 
        super();
    }
    public withIsUpgrade(isUpgrade: boolean): EstimateDesktopPoolResizeResponse {
        this['is_upgrade'] = isUpgrade;
        return this;
    }
    public set isUpgrade(isUpgrade: boolean  | undefined) {
        this['is_upgrade'] = isUpgrade;
    }
    public get isUpgrade(): boolean | undefined {
        return this['is_upgrade'];
    }
    public withBatchInquiryRspWhenUpgrade(batchInquiryRspWhenUpgrade: PeriodBatchUpChangeResourceRsp): EstimateDesktopPoolResizeResponse {
        this['batch_inquiry_rsp_when_upgrade'] = batchInquiryRspWhenUpgrade;
        return this;
    }
    public set batchInquiryRspWhenUpgrade(batchInquiryRspWhenUpgrade: PeriodBatchUpChangeResourceRsp  | undefined) {
        this['batch_inquiry_rsp_when_upgrade'] = batchInquiryRspWhenUpgrade;
    }
    public get batchInquiryRspWhenUpgrade(): PeriodBatchUpChangeResourceRsp | undefined {
        return this['batch_inquiry_rsp_when_upgrade'];
    }
    public withBatchInquiryRspWhenDowngrade(batchInquiryRspWhenDowngrade: BatchInquiryChangeRsp): EstimateDesktopPoolResizeResponse {
        this['batch_inquiry_rsp_when_downgrade'] = batchInquiryRspWhenDowngrade;
        return this;
    }
    public set batchInquiryRspWhenDowngrade(batchInquiryRspWhenDowngrade: BatchInquiryChangeRsp  | undefined) {
        this['batch_inquiry_rsp_when_downgrade'] = batchInquiryRspWhenDowngrade;
    }
    public get batchInquiryRspWhenDowngrade(): BatchInquiryChangeRsp | undefined {
        return this['batch_inquiry_rsp_when_downgrade'];
    }
}