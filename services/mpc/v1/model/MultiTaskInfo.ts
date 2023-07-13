import { ErrorResponse } from './ErrorResponse';
import { SourceInfo } from './SourceInfo';


export class MultiTaskInfo {
    private 'template_id'?: number | undefined;
    public error?: ErrorResponse;
    private 'output_file'?: SourceInfo | undefined;
    public constructor() { 
    }
    public withTemplateId(templateId: number): MultiTaskInfo {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withError(error: ErrorResponse): MultiTaskInfo {
        this['error'] = error;
        return this;
    }
    public withOutputFile(outputFile: SourceInfo): MultiTaskInfo {
        this['output_file'] = outputFile;
        return this;
    }
    public set outputFile(outputFile: SourceInfo | undefined) {
        this['output_file'] = outputFile;
    }
    public get outputFile() {
        return this['output_file'];
    }
}