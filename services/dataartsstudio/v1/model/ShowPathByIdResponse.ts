
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPathByIdResponse extends SdkResponse {
    public path?: string;
    public constructor() { 
        super();
    }
    public withPath(path: string): ShowPathByIdResponse {
        this['path'] = path;
        return this;
    }
}