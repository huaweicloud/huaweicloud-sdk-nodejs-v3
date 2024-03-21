import { SmartDocumentRecognizerFormResult } from './SmartDocumentRecognizerFormResult';
import { SmartDocumentRecognizerKvResult } from './SmartDocumentRecognizerKvResult';
import { SmartDocumentRecognizerLayoutResult } from './SmartDocumentRecognizerLayoutResult';
import { SmartDocumentRecognizerOcrResult } from './SmartDocumentRecognizerOcrResult';
import { SmartDocumentRecognizerTableResult } from './SmartDocumentRecognizerTableResult';


export class SmartDocumentRecognizerResult {
    private 'ocr_result'?: SmartDocumentRecognizerOcrResult;
    private 'kv_result'?: SmartDocumentRecognizerKvResult;
    private 'table_result'?: SmartDocumentRecognizerTableResult;
    private 'layout_result'?: SmartDocumentRecognizerLayoutResult;
    private 'form_result'?: SmartDocumentRecognizerFormResult;
    public constructor(ocrResult?: SmartDocumentRecognizerOcrResult) { 
        this['ocr_result'] = ocrResult;
    }
    public withOcrResult(ocrResult: SmartDocumentRecognizerOcrResult): SmartDocumentRecognizerResult {
        this['ocr_result'] = ocrResult;
        return this;
    }
    public set ocrResult(ocrResult: SmartDocumentRecognizerOcrResult  | undefined) {
        this['ocr_result'] = ocrResult;
    }
    public get ocrResult(): SmartDocumentRecognizerOcrResult | undefined {
        return this['ocr_result'];
    }
    public withKvResult(kvResult: SmartDocumentRecognizerKvResult): SmartDocumentRecognizerResult {
        this['kv_result'] = kvResult;
        return this;
    }
    public set kvResult(kvResult: SmartDocumentRecognizerKvResult  | undefined) {
        this['kv_result'] = kvResult;
    }
    public get kvResult(): SmartDocumentRecognizerKvResult | undefined {
        return this['kv_result'];
    }
    public withTableResult(tableResult: SmartDocumentRecognizerTableResult): SmartDocumentRecognizerResult {
        this['table_result'] = tableResult;
        return this;
    }
    public set tableResult(tableResult: SmartDocumentRecognizerTableResult  | undefined) {
        this['table_result'] = tableResult;
    }
    public get tableResult(): SmartDocumentRecognizerTableResult | undefined {
        return this['table_result'];
    }
    public withLayoutResult(layoutResult: SmartDocumentRecognizerLayoutResult): SmartDocumentRecognizerResult {
        this['layout_result'] = layoutResult;
        return this;
    }
    public set layoutResult(layoutResult: SmartDocumentRecognizerLayoutResult  | undefined) {
        this['layout_result'] = layoutResult;
    }
    public get layoutResult(): SmartDocumentRecognizerLayoutResult | undefined {
        return this['layout_result'];
    }
    public withFormResult(formResult: SmartDocumentRecognizerFormResult): SmartDocumentRecognizerResult {
        this['form_result'] = formResult;
        return this;
    }
    public set formResult(formResult: SmartDocumentRecognizerFormResult  | undefined) {
        this['form_result'] = formResult;
    }
    public get formResult(): SmartDocumentRecognizerFormResult | undefined {
        return this['form_result'];
    }
}