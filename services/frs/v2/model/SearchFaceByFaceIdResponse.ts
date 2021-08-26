import { SearchFace } from './SearchFace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchFaceByFaceIdResponse extends SdkResponse {
    public faces?: Array<SearchFace>;
    public constructor() { 
        super();
    }
    public withFaces(faces: Array<SearchFace>): SearchFaceByFaceIdResponse {
        this['faces'] = faces;
        return this;
    }
}