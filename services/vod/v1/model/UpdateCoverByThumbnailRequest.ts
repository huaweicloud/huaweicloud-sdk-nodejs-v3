import { UpdateCoverByThumbnailReq } from './UpdateCoverByThumbnailReq';


export class UpdateCoverByThumbnailRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: UpdateCoverByThumbnailReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): UpdateCoverByThumbnailRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UpdateCoverByThumbnailRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: UpdateCoverByThumbnailReq): UpdateCoverByThumbnailRequest {
        this['body'] = body;
        return this;
    }
}