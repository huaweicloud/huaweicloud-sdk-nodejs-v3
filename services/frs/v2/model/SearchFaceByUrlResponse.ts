import { SearchFace } from './SearchFace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchFaceByUrlResponse extends SdkResponse {
    public faces?: Array<SearchFace>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withFaces(faces: Array<SearchFace>): SearchFaceByUrlResponse {
        this['faces'] = faces;
        return this;
    }
    public withXRequestId(xRequestId: string): SearchFaceByUrlResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}