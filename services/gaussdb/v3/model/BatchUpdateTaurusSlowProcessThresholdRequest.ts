import { BatchModifySlowProcessThresholdRequestBody } from './BatchModifySlowProcessThresholdRequestBody';


export class BatchUpdateTaurusSlowProcessThresholdRequest {
    private 'X-Language'?: string;
    public body?: BatchModifySlowProcessThresholdRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): BatchUpdateTaurusSlowProcessThresholdRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchModifySlowProcessThresholdRequestBody): BatchUpdateTaurusSlowProcessThresholdRequest {
        this['body'] = body;
        return this;
    }
}