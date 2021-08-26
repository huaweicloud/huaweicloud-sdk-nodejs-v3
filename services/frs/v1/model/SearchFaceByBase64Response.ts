import { SearchFace } from './SearchFace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchFaceByBase64Response extends SdkResponse {
    public faces?: Array<SearchFace>;
    public constructor() { 
        super();
    }
    public withFaces(faces: Array<SearchFace>): SearchFaceByBase64Response {
        this['faces'] = faces;
        return this;
    }
}