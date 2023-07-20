import { UploadPackageGroupReq } from './UploadPackageGroupReq';


export class UploadResourcesRequest {
    private 'USER-ID'?: string;
    public body?: UploadPackageGroupReq;
    public constructor() { 
    }
    public withUserId(userId: string): UploadResourcesRequest {
        this['USER-ID'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['USER-ID'] = userId;
    }
    public get userId(): string | undefined {
        return this['USER-ID'];
    }
    public withBody(body: UploadPackageGroupReq): UploadResourcesRequest {
        this['body'] = body;
        return this;
    }
}