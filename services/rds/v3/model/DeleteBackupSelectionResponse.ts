
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteBackupSelectionResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): DeleteBackupSelectionResponse {
        this['resp'] = resp;
        return this;
    }
}