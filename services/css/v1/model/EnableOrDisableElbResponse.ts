
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableOrDisableElbResponse extends SdkResponse {
    private 'elb_id'?: string;
    public constructor() { 
        super();
    }
    public withElbId(elbId: string): EnableOrDisableElbResponse {
        this['elb_id'] = elbId;
        return this;
    }
    public set elbId(elbId: string  | undefined) {
        this['elb_id'] = elbId;
    }
    public get elbId(): string | undefined {
        return this['elb_id'];
    }
}