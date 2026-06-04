import { UpdateScreenRecordsRequestBody } from './UpdateScreenRecordsRequestBody';


export class UpdateScreenRecordsRequest {
    private 'record_id'?: string;
    public body?: UpdateScreenRecordsRequestBody;
    public constructor(recordId?: string) { 
        this['record_id'] = recordId;
    }
    public withRecordId(recordId: string): UpdateScreenRecordsRequest {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withBody(body: UpdateScreenRecordsRequestBody): UpdateScreenRecordsRequest {
        this['body'] = body;
        return this;
    }
}