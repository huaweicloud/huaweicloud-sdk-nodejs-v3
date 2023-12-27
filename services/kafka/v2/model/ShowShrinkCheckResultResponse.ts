import { ShowShrinkCheckResponseBodyCheckDetail } from './ShowShrinkCheckResponseBodyCheckDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowShrinkCheckResultResponse extends SdkResponse {
    public success?: boolean;
    private 'check_detail'?: Array<ShowShrinkCheckResponseBodyCheckDetail>;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): ShowShrinkCheckResultResponse {
        this['success'] = success;
        return this;
    }
    public withCheckDetail(checkDetail: Array<ShowShrinkCheckResponseBodyCheckDetail>): ShowShrinkCheckResultResponse {
        this['check_detail'] = checkDetail;
        return this;
    }
    public set checkDetail(checkDetail: Array<ShowShrinkCheckResponseBodyCheckDetail>  | undefined) {
        this['check_detail'] = checkDetail;
    }
    public get checkDetail(): Array<ShowShrinkCheckResponseBodyCheckDetail> | undefined {
        return this['check_detail'];
    }
}