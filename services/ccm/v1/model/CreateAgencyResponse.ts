
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAgencyResponse extends SdkResponse {
    private 'agency_id'?: string;
    public constructor() { 
        super();
    }
    public withAgencyId(agencyId: string): CreateAgencyResponse {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
}