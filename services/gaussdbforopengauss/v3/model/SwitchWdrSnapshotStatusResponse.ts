
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchWdrSnapshotStatusResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): SwitchWdrSnapshotStatusResponse {
        this['body'] = body;
        return this;
    }
}