import { ErrorTable } from './ErrorTable';
import { SuccessTable } from './SuccessTable';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadImportExcelTemplateResponse extends SdkResponse {
    public success?: boolean;
    private 'processed_rows'?: number;
    private 'error_tables'?: Array<ErrorTable>;
    private 'success_tables'?: Array<SuccessTable>;
    private 'error_count'?: number;
    private 'success_count'?: number;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): UploadImportExcelTemplateResponse {
        this['success'] = success;
        return this;
    }
    public withProcessedRows(processedRows: number): UploadImportExcelTemplateResponse {
        this['processed_rows'] = processedRows;
        return this;
    }
    public set processedRows(processedRows: number  | undefined) {
        this['processed_rows'] = processedRows;
    }
    public get processedRows(): number | undefined {
        return this['processed_rows'];
    }
    public withErrorTables(errorTables: Array<ErrorTable>): UploadImportExcelTemplateResponse {
        this['error_tables'] = errorTables;
        return this;
    }
    public set errorTables(errorTables: Array<ErrorTable>  | undefined) {
        this['error_tables'] = errorTables;
    }
    public get errorTables(): Array<ErrorTable> | undefined {
        return this['error_tables'];
    }
    public withSuccessTables(successTables: Array<SuccessTable>): UploadImportExcelTemplateResponse {
        this['success_tables'] = successTables;
        return this;
    }
    public set successTables(successTables: Array<SuccessTable>  | undefined) {
        this['success_tables'] = successTables;
    }
    public get successTables(): Array<SuccessTable> | undefined {
        return this['success_tables'];
    }
    public withErrorCount(errorCount: number): UploadImportExcelTemplateResponse {
        this['error_count'] = errorCount;
        return this;
    }
    public set errorCount(errorCount: number  | undefined) {
        this['error_count'] = errorCount;
    }
    public get errorCount(): number | undefined {
        return this['error_count'];
    }
    public withSuccessCount(successCount: number): UploadImportExcelTemplateResponse {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
}