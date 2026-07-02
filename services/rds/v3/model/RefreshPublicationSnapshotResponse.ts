
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RefreshPublicationSnapshotResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): RefreshPublicationSnapshotResponse {
        this['resp'] = resp;
        return this;
    }
}