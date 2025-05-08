import { ThumbnailTaskOutPut } from './ThumbnailTaskOutPut';


export class ThumbnailTask {
    public status?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public output?: ThumbnailTaskOutPut;
    public constructor() { 
    }
    public withStatus(status: string): ThumbnailTask {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): ThumbnailTask {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ThumbnailTask {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withOutput(output: ThumbnailTaskOutPut): ThumbnailTask {
        this['output'] = output;
        return this;
    }
}