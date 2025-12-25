import { NodeRunInfoInnerErrorErrorBody } from './NodeRunInfoInnerErrorErrorBody';


export class NodeRunInfoInnerError {
    private 'is_success'?: boolean;
    private 'error_body'?: NodeRunInfoInnerErrorErrorBody;
    public constructor() { 
    }
    public withIsSuccess(isSuccess: boolean): NodeRunInfoInnerError {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withErrorBody(errorBody: NodeRunInfoInnerErrorErrorBody): NodeRunInfoInnerError {
        this['error_body'] = errorBody;
        return this;
    }
    public set errorBody(errorBody: NodeRunInfoInnerErrorErrorBody  | undefined) {
        this['error_body'] = errorBody;
    }
    public get errorBody(): NodeRunInfoInnerErrorErrorBody | undefined {
        return this['error_body'];
    }
}