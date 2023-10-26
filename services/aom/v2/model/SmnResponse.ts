import { SmnInfo } from './SmnInfo';


export class SmnResponse {
    private 'sent_time'?: number;
    private 'smn_notified_history'?: Array<SmnInfo>;
    private 'smn_request_id'?: string;
    private 'smn_response_body'?: string;
    private 'smn_response_code'?: string;
    private 'smn_topic'?: string;
    public constructor() { 
    }
    public withSentTime(sentTime: number): SmnResponse {
        this['sent_time'] = sentTime;
        return this;
    }
    public set sentTime(sentTime: number  | undefined) {
        this['sent_time'] = sentTime;
    }
    public get sentTime(): number | undefined {
        return this['sent_time'];
    }
    public withSmnNotifiedHistory(smnNotifiedHistory: Array<SmnInfo>): SmnResponse {
        this['smn_notified_history'] = smnNotifiedHistory;
        return this;
    }
    public set smnNotifiedHistory(smnNotifiedHistory: Array<SmnInfo>  | undefined) {
        this['smn_notified_history'] = smnNotifiedHistory;
    }
    public get smnNotifiedHistory(): Array<SmnInfo> | undefined {
        return this['smn_notified_history'];
    }
    public withSmnRequestId(smnRequestId: string): SmnResponse {
        this['smn_request_id'] = smnRequestId;
        return this;
    }
    public set smnRequestId(smnRequestId: string  | undefined) {
        this['smn_request_id'] = smnRequestId;
    }
    public get smnRequestId(): string | undefined {
        return this['smn_request_id'];
    }
    public withSmnResponseBody(smnResponseBody: string): SmnResponse {
        this['smn_response_body'] = smnResponseBody;
        return this;
    }
    public set smnResponseBody(smnResponseBody: string  | undefined) {
        this['smn_response_body'] = smnResponseBody;
    }
    public get smnResponseBody(): string | undefined {
        return this['smn_response_body'];
    }
    public withSmnResponseCode(smnResponseCode: string): SmnResponse {
        this['smn_response_code'] = smnResponseCode;
        return this;
    }
    public set smnResponseCode(smnResponseCode: string  | undefined) {
        this['smn_response_code'] = smnResponseCode;
    }
    public get smnResponseCode(): string | undefined {
        return this['smn_response_code'];
    }
    public withSmnTopic(smnTopic: string): SmnResponse {
        this['smn_topic'] = smnTopic;
        return this;
    }
    public set smnTopic(smnTopic: string  | undefined) {
        this['smn_topic'] = smnTopic;
    }
    public get smnTopic(): string | undefined {
        return this['smn_topic'];
    }
}