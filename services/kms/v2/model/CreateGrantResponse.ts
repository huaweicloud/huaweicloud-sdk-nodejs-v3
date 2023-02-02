
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateGrantResponse extends SdkResponse {
    private 'grant_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withGrantId(grantId: string): CreateGrantResponse {
        this['grant_id'] = grantId;
        return this;
    }
    public set grantId(grantId: string | undefined) {
        this['grant_id'] = grantId;
    }
    public get grantId() {
        return this['grant_id'];
    }
}