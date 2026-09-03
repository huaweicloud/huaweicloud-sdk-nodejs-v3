
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeadLockOriginDataResponse extends SdkResponse {
    private 'origin_data'?: string;
    public constructor() { 
        super();
    }
    public withOriginData(originData: string): ShowDeadLockOriginDataResponse {
        this['origin_data'] = originData;
        return this;
    }
    public set originData(originData: string  | undefined) {
        this['origin_data'] = originData;
    }
    public get originData(): string | undefined {
        return this['origin_data'];
    }
}