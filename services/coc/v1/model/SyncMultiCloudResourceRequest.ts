import { SyncMultiCloudResourceRequestBody } from './SyncMultiCloudResourceRequestBody';


export class SyncMultiCloudResourceRequest {
    public body?: SyncMultiCloudResourceRequestBody;
    public constructor() { 
    }
    public withBody(body: SyncMultiCloudResourceRequestBody): SyncMultiCloudResourceRequest {
        this['body'] = body;
        return this;
    }
}