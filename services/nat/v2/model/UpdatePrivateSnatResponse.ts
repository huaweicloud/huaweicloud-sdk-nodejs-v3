import { PrivateSnat } from './PrivateSnat';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePrivateSnatResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'snat_rule'?: PrivateSnat;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpdatePrivateSnatResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSnatRule(snatRule: PrivateSnat): UpdatePrivateSnatResponse {
        this['snat_rule'] = snatRule;
        return this;
    }
    public set snatRule(snatRule: PrivateSnat  | undefined) {
        this['snat_rule'] = snatRule;
    }
    public get snatRule(): PrivateSnat | undefined {
        return this['snat_rule'];
    }
}