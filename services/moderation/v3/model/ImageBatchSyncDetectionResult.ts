import { ImageDetectionResultDetail } from './ImageDetectionResultDetail';


export class ImageBatchSyncDetectionResult {
    public suggestion?: string;
    public category?: string;
    public details?: Array<ImageDetectionResultDetail>;
    private 'ocr_text'?: string;
    private 'data_id'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor(dataId?: string) { 
        this['data_id'] = dataId;
    }
    public withSuggestion(suggestion: string): ImageBatchSyncDetectionResult {
        this['suggestion'] = suggestion;
        return this;
    }
    public withCategory(category: string): ImageBatchSyncDetectionResult {
        this['category'] = category;
        return this;
    }
    public withDetails(details: Array<ImageDetectionResultDetail>): ImageBatchSyncDetectionResult {
        this['details'] = details;
        return this;
    }
    public withOcrText(ocrText: string): ImageBatchSyncDetectionResult {
        this['ocr_text'] = ocrText;
        return this;
    }
    public set ocrText(ocrText: string  | undefined) {
        this['ocr_text'] = ocrText;
    }
    public get ocrText(): string | undefined {
        return this['ocr_text'];
    }
    public withDataId(dataId: string): ImageBatchSyncDetectionResult {
        this['data_id'] = dataId;
        return this;
    }
    public set dataId(dataId: string  | undefined) {
        this['data_id'] = dataId;
    }
    public get dataId(): string | undefined {
        return this['data_id'];
    }
    public withErrorCode(errorCode: string): ImageBatchSyncDetectionResult {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ImageBatchSyncDetectionResult {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}