
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopTransactionResponse extends SdkResponse {
    private 'session_ids'?: Array<string>;
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withSessionIds(sessionIds: Array<string>): StopTransactionResponse {
        this['session_ids'] = sessionIds;
        return this;
    }
    public set sessionIds(sessionIds: Array<string>  | undefined) {
        this['session_ids'] = sessionIds;
    }
    public get sessionIds(): Array<string> | undefined {
        return this['session_ids'];
    }
    public withSuccess(success: boolean): StopTransactionResponse {
        this['success'] = success;
        return this;
    }
}