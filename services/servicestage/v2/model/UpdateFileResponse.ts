
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFileResponse extends SdkResponse {
    public path?: string;
    public constructor() { 
        super();
    }
    public withPath(path: string): UpdateFileResponse {
        this['path'] = path;
        return this;
    }
}