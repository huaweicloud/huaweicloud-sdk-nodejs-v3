import { UploadResourcesRequestBody } from './UploadResourcesRequestBody';


export class UploadPythonFileJobResourcesRequest {
    private 'USER-ID'?: string;
    public body?: UploadResourcesRequestBody;
    public constructor() { 
    }
    public withUserId(userId: string): UploadPythonFileJobResourcesRequest {
        this['USER-ID'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['USER-ID'] = userId;
    }
    public get userId(): string | undefined {
        return this['USER-ID'];
    }
    public withBody(body: UploadResourcesRequestBody): UploadPythonFileJobResourcesRequest {
        this['body'] = body;
        return this;
    }
}