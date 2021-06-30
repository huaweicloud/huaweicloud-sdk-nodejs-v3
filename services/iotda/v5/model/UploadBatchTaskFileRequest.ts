import { UploadBatchTaskFileRequestBody } from './UploadBatchTaskFileRequestBody';


export class UploadBatchTaskFileRequest {
    private 'Instance-Id'?: string | undefined;
    public body?: UploadBatchTaskFileRequestBody;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): UploadBatchTaskFileRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withBody(body: UploadBatchTaskFileRequestBody): UploadBatchTaskFileRequest {
        this['body'] = body;
        return this;
    }
}