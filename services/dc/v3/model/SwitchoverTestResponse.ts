import { SwitchoverTestRecord } from './SwitchoverTestRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchoverTestResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'switchover_test_record'?: SwitchoverTestRecord;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): SwitchoverTestResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSwitchoverTestRecord(switchoverTestRecord: SwitchoverTestRecord): SwitchoverTestResponse {
        this['switchover_test_record'] = switchoverTestRecord;
        return this;
    }
    public set switchoverTestRecord(switchoverTestRecord: SwitchoverTestRecord  | undefined) {
        this['switchover_test_record'] = switchoverTestRecord;
    }
    public get switchoverTestRecord(): SwitchoverTestRecord | undefined {
        return this['switchover_test_record'];
    }
}