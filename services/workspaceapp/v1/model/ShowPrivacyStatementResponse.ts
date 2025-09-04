
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPrivacyStatementResponse extends SdkResponse {
    public version?: string;
    public content?: string;
    private 'publish_time'?: Date;
    public language?: string;
    private 'signed_history_record'?: boolean;
    private 'signed_newest_record'?: boolean;
    public constructor() { 
        super();
    }
    public withVersion(version: string): ShowPrivacyStatementResponse {
        this['version'] = version;
        return this;
    }
    public withContent(content: string): ShowPrivacyStatementResponse {
        this['content'] = content;
        return this;
    }
    public withPublishTime(publishTime: Date): ShowPrivacyStatementResponse {
        this['publish_time'] = publishTime;
        return this;
    }
    public set publishTime(publishTime: Date  | undefined) {
        this['publish_time'] = publishTime;
    }
    public get publishTime(): Date | undefined {
        return this['publish_time'];
    }
    public withLanguage(language: string): ShowPrivacyStatementResponse {
        this['language'] = language;
        return this;
    }
    public withSignedHistoryRecord(signedHistoryRecord: boolean): ShowPrivacyStatementResponse {
        this['signed_history_record'] = signedHistoryRecord;
        return this;
    }
    public set signedHistoryRecord(signedHistoryRecord: boolean  | undefined) {
        this['signed_history_record'] = signedHistoryRecord;
    }
    public get signedHistoryRecord(): boolean | undefined {
        return this['signed_history_record'];
    }
    public withSignedNewestRecord(signedNewestRecord: boolean): ShowPrivacyStatementResponse {
        this['signed_newest_record'] = signedNewestRecord;
        return this;
    }
    public set signedNewestRecord(signedNewestRecord: boolean  | undefined) {
        this['signed_newest_record'] = signedNewestRecord;
    }
    public get signedNewestRecord(): boolean | undefined {
        return this['signed_newest_record'];
    }
}