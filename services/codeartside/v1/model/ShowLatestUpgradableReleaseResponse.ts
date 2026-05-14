import { ShowLatestUpgradableReleaseResponseBodyResult } from './ShowLatestUpgradableReleaseResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLatestUpgradableReleaseResponse extends SdkResponse {
    public result?: ShowLatestUpgradableReleaseResponseBodyResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ShowLatestUpgradableReleaseResponseBodyResult): ShowLatestUpgradableReleaseResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowLatestUpgradableReleaseResponse {
        this['status'] = status;
        return this;
    }
}