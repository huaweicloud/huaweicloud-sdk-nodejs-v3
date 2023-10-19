import { SearchFace } from './SearchFace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchFaceByBase64Response extends SdkResponse {
    public faces?: Array<SearchFace>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withFaces(faces: Array<SearchFace>): SearchFaceByBase64Response {
        this['faces'] = faces;
        return this;
    }
    public withXRequestId(xRequestId: string): SearchFaceByBase64Response {
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