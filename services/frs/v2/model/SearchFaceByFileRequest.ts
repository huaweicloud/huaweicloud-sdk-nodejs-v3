import { SearchFaceByFileRequestBody } from './SearchFaceByFileRequestBody';


export class SearchFaceByFileRequest {
    private 'face_set_name'?: string;
    private 'Enterprise-Project-Id'?: string;
    public body?: SearchFaceByFileRequestBody;
    public constructor(faceSetName?: string) { 
        this['face_set_name'] = faceSetName;
    }
    public withFaceSetName(faceSetName: string): SearchFaceByFileRequest {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string  | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName(): string | undefined {
        return this['face_set_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SearchFaceByFileRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: SearchFaceByFileRequestBody): SearchFaceByFileRequest {
        this['body'] = body;
        return this;
    }
}