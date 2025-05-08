import { ImageSpriteTaskOutPut } from './ImageSpriteTaskOutPut';


export class ImageSpriteTask {
    public status?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public output?: ImageSpriteTaskOutPut;
    public constructor() { 
    }
    public withStatus(status: string): ImageSpriteTask {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): ImageSpriteTask {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ImageSpriteTask {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withOutput(output: ImageSpriteTaskOutPut): ImageSpriteTask {
        this['output'] = output;
        return this;
    }
}