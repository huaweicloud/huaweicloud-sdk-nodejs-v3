import { AbnormalRootCause } from './AbnormalRootCause';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLockWaitSessionResponse extends SdkResponse {
    private 'abnormal_root_cause'?: AbnormalRootCause;
    public constructor() { 
        super();
    }
    public withAbnormalRootCause(abnormalRootCause: AbnormalRootCause): ShowLockWaitSessionResponse {
        this['abnormal_root_cause'] = abnormalRootCause;
        return this;
    }
    public set abnormalRootCause(abnormalRootCause: AbnormalRootCause  | undefined) {
        this['abnormal_root_cause'] = abnormalRootCause;
    }
    public get abnormalRootCause(): AbnormalRootCause | undefined {
        return this['abnormal_root_cause'];
    }
}