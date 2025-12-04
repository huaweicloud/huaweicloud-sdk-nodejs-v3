import { VulnerabilityReports } from './VulnerabilityReports';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceArtifactVulnerabilitiesResponse extends SdkResponse {
    public body?: { [key: string]: VulnerabilityReports; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: VulnerabilityReports; }): ListInstanceArtifactVulnerabilitiesResponse {
        this['body'] = body;
        return this;
    }
}