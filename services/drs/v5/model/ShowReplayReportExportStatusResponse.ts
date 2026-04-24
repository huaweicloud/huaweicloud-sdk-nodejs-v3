
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReplayReportExportStatusResponse extends SdkResponse {
    private 'export_status'?: string;
    private 'job_id'?: string;
    private 'file_type'?: string;
    private 'failed_reason'?: string;
    private 'total_count'?: number;
    private 'current_count'?: number;
    private 'progress_percentage'?: number;
    private 'uploaded_file_names'?: Array<string>;
    public constructor() { 
        super();
    }
    public withExportStatus(exportStatus: string): ShowReplayReportExportStatusResponse {
        this['export_status'] = exportStatus;
        return this;
    }
    public set exportStatus(exportStatus: string  | undefined) {
        this['export_status'] = exportStatus;
    }
    public get exportStatus(): string | undefined {
        return this['export_status'];
    }
    public withJobId(jobId: string): ShowReplayReportExportStatusResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withFileType(fileType: string): ShowReplayReportExportStatusResponse {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withFailedReason(failedReason: string): ShowReplayReportExportStatusResponse {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withTotalCount(totalCount: number): ShowReplayReportExportStatusResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withCurrentCount(currentCount: number): ShowReplayReportExportStatusResponse {
        this['current_count'] = currentCount;
        return this;
    }
    public set currentCount(currentCount: number  | undefined) {
        this['current_count'] = currentCount;
    }
    public get currentCount(): number | undefined {
        return this['current_count'];
    }
    public withProgressPercentage(progressPercentage: number): ShowReplayReportExportStatusResponse {
        this['progress_percentage'] = progressPercentage;
        return this;
    }
    public set progressPercentage(progressPercentage: number  | undefined) {
        this['progress_percentage'] = progressPercentage;
    }
    public get progressPercentage(): number | undefined {
        return this['progress_percentage'];
    }
    public withUploadedFileNames(uploadedFileNames: Array<string>): ShowReplayReportExportStatusResponse {
        this['uploaded_file_names'] = uploadedFileNames;
        return this;
    }
    public set uploadedFileNames(uploadedFileNames: Array<string>  | undefined) {
        this['uploaded_file_names'] = uploadedFileNames;
    }
    public get uploadedFileNames(): Array<string> | undefined {
        return this['uploaded_file_names'];
    }
}