import { RecordContentInfoV2 } from './RecordContentInfoV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRecordContentsResponse extends SdkResponse {
    public total?: number;
    private 'record_contents'?: Array<RecordContentInfoV2> | undefined;
    private 'X-Request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRecordContentsResponse {
        this['total'] = total;
        return this;
    }
    public withRecordContents(recordContents: Array<RecordContentInfoV2>): ListRecordContentsResponse {
        this['record_contents'] = recordContents;
        return this;
    }
    public set recordContents(recordContents: Array<RecordContentInfoV2> | undefined) {
        this['record_contents'] = recordContents;
    }
    public get recordContents() {
        return this['record_contents'];
    }
    public withXRequestId(xRequestId: string): ListRecordContentsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
}