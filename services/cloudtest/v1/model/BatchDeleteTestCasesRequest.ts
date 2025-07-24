import { DeleteTestCaseInfo } from './DeleteTestCaseInfo';


export class BatchDeleteTestCasesRequest {
    private 'is_async'?: boolean;
    public body?: DeleteTestCaseInfo;
    public constructor() { 
    }
    public withIsAsync(isAsync: boolean): BatchDeleteTestCasesRequest {
        this['is_async'] = isAsync;
        return this;
    }
    public set isAsync(isAsync: boolean  | undefined) {
        this['is_async'] = isAsync;
    }
    public get isAsync(): boolean | undefined {
        return this['is_async'];
    }
    public withBody(body: DeleteTestCaseInfo): BatchDeleteTestCasesRequest {
        this['body'] = body;
        return this;
    }
}