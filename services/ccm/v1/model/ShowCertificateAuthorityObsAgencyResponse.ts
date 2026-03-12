
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCertificateAuthorityObsAgencyResponse extends SdkResponse {
    private 'agency_granted'?: string;
    public constructor() { 
        super();
    }
    public withAgencyGranted(agencyGranted: string): ShowCertificateAuthorityObsAgencyResponse {
        this['agency_granted'] = agencyGranted;
        return this;
    }
    public set agencyGranted(agencyGranted: string  | undefined) {
        this['agency_granted'] = agencyGranted;
    }
    public get agencyGranted(): string | undefined {
        return this['agency_granted'];
    }
}