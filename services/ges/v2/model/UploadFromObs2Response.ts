
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadFromObs2Response extends SdkResponse {
    public id?: string;
    public name?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UploadFromObs2Response {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UploadFromObs2Response {
        this['name'] = name;
        return this;
    }
}