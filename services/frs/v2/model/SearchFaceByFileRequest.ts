import { SearchFaceByFileRequestBody } from './SearchFaceByFileRequestBody';


export class SearchFaceByFileRequest {
    private 'face_set_name': string | undefined;
    public body?: SearchFaceByFileRequestBody;
    public constructor(faceSetName?: any) { 
        this['face_set_name'] = faceSetName;
    }
    public withFaceSetName(faceSetName: string): SearchFaceByFileRequest {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withBody(body: SearchFaceByFileRequestBody): SearchFaceByFileRequest {
        this['body'] = body;
        return this;
    }
}