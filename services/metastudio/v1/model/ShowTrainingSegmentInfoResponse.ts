
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrainingSegmentInfoResponse extends SdkResponse {
    private 'confirmed_index'?: Array<number>;
    public constructor() { 
        super();
    }
    public withConfirmedIndex(confirmedIndex: Array<number>): ShowTrainingSegmentInfoResponse {
        this['confirmed_index'] = confirmedIndex;
        return this;
    }
    public set confirmedIndex(confirmedIndex: Array<number>  | undefined) {
        this['confirmed_index'] = confirmedIndex;
    }
    public get confirmedIndex(): Array<number> | undefined {
        return this['confirmed_index'];
    }
}