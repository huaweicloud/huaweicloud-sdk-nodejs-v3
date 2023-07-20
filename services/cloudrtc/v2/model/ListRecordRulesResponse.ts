import { RecordRule } from './RecordRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRecordRulesResponse extends SdkResponse {
    public rules?: Array<RecordRule>;
    private 'X-request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<RecordRule>): ListRecordRulesResponse {
        this['rules'] = rules;
        return this;
    }
    public withXRequestId(xRequestId: string): ListRecordRulesResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-Id'];
    }
}