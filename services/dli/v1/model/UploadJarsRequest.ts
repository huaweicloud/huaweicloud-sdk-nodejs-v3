import { UploadGroupPackageReq } from './UploadGroupPackageReq';


export class UploadJarsRequest {
    private 'USER-ID'?: string;
    public body?: UploadGroupPackageReq;
    public constructor() { 
    }
    public withUserId(userId: string): UploadJarsRequest {
        this['USER-ID'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['USER-ID'] = userId;
    }
    public get userId(): string | undefined {
        return this['USER-ID'];
    }
    public withBody(body: UploadGroupPackageReq): UploadJarsRequest {
        this['body'] = body;
        return this;
    }
}