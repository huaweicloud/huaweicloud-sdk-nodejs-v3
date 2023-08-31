import { PrivateSnat } from './PrivateSnat';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPrivateSnatResponse extends SdkResponse {
    private 'snat_rule'?: PrivateSnat;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withSnatRule(snatRule: PrivateSnat): ShowPrivateSnatResponse {
        this['snat_rule'] = snatRule;
        return this;
    }
    public set snatRule(snatRule: PrivateSnat  | undefined) {
        this['snat_rule'] = snatRule;
    }
    public get snatRule(): PrivateSnat | undefined {
        return this['snat_rule'];
    }
    public withRequestId(requestId: string): ShowPrivateSnatResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}