import { UploadGroupPackageReq } from './UploadGroupPackageReq';


export class UploadFilesRequest {
    private 'USER-ID'?: string;
    public body?: UploadGroupPackageReq;
    public constructor() { 
    }
    public withUserId(userId: string): UploadFilesRequest {
        this['USER-ID'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['USER-ID'] = userId;
    }
    public get userId(): string | undefined {
        return this['USER-ID'];
    }
    public withBody(body: UploadGroupPackageReq): UploadFilesRequest {
        this['body'] = body;
        return this;
    }
}