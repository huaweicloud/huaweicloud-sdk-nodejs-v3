
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterScaleInNumbersResponse extends SdkResponse {
    private 'shrink_sequence'?: Array<string>;
    public constructor() { 
        super();
    }
    public withShrinkSequence(shrinkSequence: Array<string>): ListClusterScaleInNumbersResponse {
        this['shrink_sequence'] = shrinkSequence;
        return this;
    }
    public set shrinkSequence(shrinkSequence: Array<string>  | undefined) {
        this['shrink_sequence'] = shrinkSequence;
    }
    public get shrinkSequence(): Array<string> | undefined {
        return this['shrink_sequence'];
    }
}