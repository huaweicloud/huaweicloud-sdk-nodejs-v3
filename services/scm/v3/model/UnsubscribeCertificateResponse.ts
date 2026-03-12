
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UnsubscribeCertificateResponse extends SdkResponse {
    private 'unsubscribe_results'?: string;
    public constructor() { 
        super();
    }
    public withUnsubscribeResults(unsubscribeResults: string): UnsubscribeCertificateResponse {
        this['unsubscribe_results'] = unsubscribeResults;
        return this;
    }
    public set unsubscribeResults(unsubscribeResults: string  | undefined) {
        this['unsubscribe_results'] = unsubscribeResults;
    }
    public get unsubscribeResults(): string | undefined {
        return this['unsubscribe_results'];
    }
}