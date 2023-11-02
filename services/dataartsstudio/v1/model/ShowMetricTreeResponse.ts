import { ArchitectureStatistic } from './ArchitectureStatistic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMetricTreeResponse extends SdkResponse {
    public architecture?: Array<ArchitectureStatistic>;
    public constructor() { 
        super();
    }
    public withArchitecture(architecture: Array<ArchitectureStatistic>): ShowMetricTreeResponse {
        this['architecture'] = architecture;
        return this;
    }
}