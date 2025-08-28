import { Explain } from './Explain';
import { FeedbackInfo } from './FeedbackInfo';
import { IndexAdviceInfo } from './IndexAdviceInfo';
import { TbPosInfo } from './TbPosInfo';


export class AdviceResult {
    private 'message_id'?: string;
    private 'status_code'?: string;
    private 'error_code'?: string;
    private 'error_message'?: string;
    private 'index_advice'?: Array<IndexAdviceInfo>;
    private 'tuning_advice'?: Array<string>;
    private 'formatted_sql'?: string;
    private 'original_sql'?: string;
    public explain?: Array<Explain>;
    private 'tb_pos_infos'?: Array<TbPosInfo>;
    private 'feedback_infos'?: FeedbackInfo;
    public constructor() { 
    }
    public withMessageId(messageId: string): AdviceResult {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string  | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId(): string | undefined {
        return this['message_id'];
    }
    public withStatusCode(statusCode: string): AdviceResult {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: string  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): string | undefined {
        return this['status_code'];
    }
    public withErrorCode(errorCode: string): AdviceResult {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): AdviceResult {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withIndexAdvice(indexAdvice: Array<IndexAdviceInfo>): AdviceResult {
        this['index_advice'] = indexAdvice;
        return this;
    }
    public set indexAdvice(indexAdvice: Array<IndexAdviceInfo>  | undefined) {
        this['index_advice'] = indexAdvice;
    }
    public get indexAdvice(): Array<IndexAdviceInfo> | undefined {
        return this['index_advice'];
    }
    public withTuningAdvice(tuningAdvice: Array<string>): AdviceResult {
        this['tuning_advice'] = tuningAdvice;
        return this;
    }
    public set tuningAdvice(tuningAdvice: Array<string>  | undefined) {
        this['tuning_advice'] = tuningAdvice;
    }
    public get tuningAdvice(): Array<string> | undefined {
        return this['tuning_advice'];
    }
    public withFormattedSql(formattedSql: string): AdviceResult {
        this['formatted_sql'] = formattedSql;
        return this;
    }
    public set formattedSql(formattedSql: string  | undefined) {
        this['formatted_sql'] = formattedSql;
    }
    public get formattedSql(): string | undefined {
        return this['formatted_sql'];
    }
    public withOriginalSql(originalSql: string): AdviceResult {
        this['original_sql'] = originalSql;
        return this;
    }
    public set originalSql(originalSql: string  | undefined) {
        this['original_sql'] = originalSql;
    }
    public get originalSql(): string | undefined {
        return this['original_sql'];
    }
    public withExplain(explain: Array<Explain>): AdviceResult {
        this['explain'] = explain;
        return this;
    }
    public withTbPosInfos(tbPosInfos: Array<TbPosInfo>): AdviceResult {
        this['tb_pos_infos'] = tbPosInfos;
        return this;
    }
    public set tbPosInfos(tbPosInfos: Array<TbPosInfo>  | undefined) {
        this['tb_pos_infos'] = tbPosInfos;
    }
    public get tbPosInfos(): Array<TbPosInfo> | undefined {
        return this['tb_pos_infos'];
    }
    public withFeedbackInfos(feedbackInfos: FeedbackInfo): AdviceResult {
        this['feedback_infos'] = feedbackInfos;
        return this;
    }
    public set feedbackInfos(feedbackInfos: FeedbackInfo  | undefined) {
        this['feedback_infos'] = feedbackInfos;
    }
    public get feedbackInfos(): FeedbackInfo | undefined {
        return this['feedback_infos'];
    }
}