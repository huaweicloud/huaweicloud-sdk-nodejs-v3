
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateBusinessResponse extends SdkResponse {
    public id?: number;
    public ok?: string;
    public constructor() { 
        super();
    }
    public withId(id: number): CreateBusinessResponse {
        this['id'] = id;
        return this;
    }
    public withOk(ok: string): CreateBusinessResponse {
        this['ok'] = ok;
        return this;
    }
}