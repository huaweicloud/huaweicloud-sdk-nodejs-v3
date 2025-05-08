import { TaskOutPut } from './TaskOutPut';


export class TranscodeTask {
    private 'template_id'?: string;
    public status?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public output?: Array<TaskOutPut>;
    public constructor() { 
    }
    public withTemplateId(templateId: string): TranscodeTask {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withStatus(status: string): TranscodeTask {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): TranscodeTask {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): TranscodeTask {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withOutput(output: Array<TaskOutPut>): TranscodeTask {
        this['output'] = output;
        return this;
    }
}