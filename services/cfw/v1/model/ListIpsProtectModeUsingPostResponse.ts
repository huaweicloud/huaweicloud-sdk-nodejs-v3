
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpsProtectModeUsingPostResponse extends SdkResponse {
    private 'object_id'?: string | undefined;
    public status?: number;
    public constructor() { 
        super();
    }
    public withObjectId(objectId: string): ListIpsProtectModeUsingPostResponse {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
    }
    public withStatus(status: number): ListIpsProtectModeUsingPostResponse {
        this['status'] = status;
        return this;
    }
}