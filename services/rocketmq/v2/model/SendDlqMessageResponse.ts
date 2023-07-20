import { DeadletterResendRespResendResults } from './DeadletterResendRespResendResults';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SendDlqMessageResponse extends SdkResponse {
    private 'resend_results'?: Array<DeadletterResendRespResendResults>;
    public constructor() { 
        super();
    }
    public withResendResults(resendResults: Array<DeadletterResendRespResendResults>): SendDlqMessageResponse {
        this['resend_results'] = resendResults;
        return this;
    }
    public set resendResults(resendResults: Array<DeadletterResendRespResendResults>  | undefined) {
        this['resend_results'] = resendResults;
    }
    public get resendResults(): Array<DeadletterResendRespResendResults> | undefined {
        return this['resend_results'];
    }
}