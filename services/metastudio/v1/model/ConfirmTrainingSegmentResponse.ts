
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ConfirmTrainingSegmentResponse extends SdkResponse {
    private 'confirm_result'?: boolean;
    private 'unmatched_index_hit'?: Array<number>;
    public constructor() { 
        super();
    }
    public withConfirmResult(confirmResult: boolean): ConfirmTrainingSegmentResponse {
        this['confirm_result'] = confirmResult;
        return this;
    }
    public set confirmResult(confirmResult: boolean  | undefined) {
        this['confirm_result'] = confirmResult;
    }
    public get confirmResult(): boolean | undefined {
        return this['confirm_result'];
    }
    public withUnmatchedIndexHit(unmatchedIndexHit: Array<number>): ConfirmTrainingSegmentResponse {
        this['unmatched_index_hit'] = unmatchedIndexHit;
        return this;
    }
    public set unmatchedIndexHit(unmatchedIndexHit: Array<number>  | undefined) {
        this['unmatched_index_hit'] = unmatchedIndexHit;
    }
    public get unmatchedIndexHit(): Array<number> | undefined {
        return this['unmatched_index_hit'];
    }
}