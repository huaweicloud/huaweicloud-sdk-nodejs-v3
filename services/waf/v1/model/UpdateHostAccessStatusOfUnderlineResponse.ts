
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateHostAccessStatusOfUnderlineResponse extends SdkResponse {
    private 'access_status'?: number;
    public constructor() { 
        super();
    }
    public withAccessStatus(accessStatus: number): UpdateHostAccessStatusOfUnderlineResponse {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: number  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): number | undefined {
        return this['access_status'];
    }
}