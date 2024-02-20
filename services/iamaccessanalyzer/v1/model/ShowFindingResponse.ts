import { Finding } from './Finding';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFindingResponse extends SdkResponse {
    public finding?: Finding;
    public constructor() { 
        super();
    }
    public withFinding(finding: Finding): ShowFindingResponse {
        this['finding'] = finding;
        return this;
    }
}