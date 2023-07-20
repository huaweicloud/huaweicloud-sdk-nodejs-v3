
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSummaryResponse extends SdkResponse {
    public size?: number;
    private 'used_size'?: number;
    public constructor() { 
        super();
    }
    public withSize(size: number): ShowSummaryResponse {
        this['size'] = size;
        return this;
    }
    public withUsedSize(usedSize: number): ShowSummaryResponse {
        this['used_size'] = usedSize;
        return this;
    }
    public set usedSize(usedSize: number  | undefined) {
        this['used_size'] = usedSize;
    }
    public get usedSize(): number | undefined {
        return this['used_size'];
    }
}