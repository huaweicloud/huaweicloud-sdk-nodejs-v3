
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAccessPointResponse extends SdkResponse {
    private 'access_point_id'?: string;
    public constructor() { 
        super();
    }
    public withAccessPointId(accessPointId: string): CreateAccessPointResponse {
        this['access_point_id'] = accessPointId;
        return this;
    }
    public set accessPointId(accessPointId: string  | undefined) {
        this['access_point_id'] = accessPointId;
    }
    public get accessPointId(): string | undefined {
        return this['access_point_id'];
    }
}