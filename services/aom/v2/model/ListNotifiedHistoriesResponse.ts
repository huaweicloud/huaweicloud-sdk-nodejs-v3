import { NotifiedHistoriesResult } from './NotifiedHistoriesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNotifiedHistoriesResponse extends SdkResponse {
    private 'notified_histories'?: Array<NotifiedHistoriesResult>;
    public constructor() { 
        super();
    }
    public withNotifiedHistories(notifiedHistories: Array<NotifiedHistoriesResult>): ListNotifiedHistoriesResponse {
        this['notified_histories'] = notifiedHistories;
        return this;
    }
    public set notifiedHistories(notifiedHistories: Array<NotifiedHistoriesResult>  | undefined) {
        this['notified_histories'] = notifiedHistories;
    }
    public get notifiedHistories(): Array<NotifiedHistoriesResult> | undefined {
        return this['notified_histories'];
    }
}