import { UploadJobResourcesRequestBody } from './UploadJobResourcesRequestBody';


export class UploadJobResourcesRequest {
    private 'USER-ID'?: string;
    public body?: UploadJobResourcesRequestBody;
    public constructor() { 
    }
    public withUserId(userId: string): UploadJobResourcesRequest {
        this['USER-ID'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['USER-ID'] = userId;
    }
    public get userId(): string | undefined {
        return this['USER-ID'];
    }
    public withBody(body: UploadJobResourcesRequestBody): UploadJobResourcesRequest {
        this['body'] = body;
        return this;
    }
}