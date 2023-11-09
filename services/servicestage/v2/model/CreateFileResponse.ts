
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFileResponse extends SdkResponse {
    public path?: string;
    public constructor() { 
        super();
    }
    public withPath(path: string): CreateFileResponse {
        this['path'] = path;
        return this;
    }
}