import { FaceSearchBase64Req } from './FaceSearchBase64Req';


export class SearchFaceByBase64Request {
    private 'face_set_name'?: string;
    private 'Enterprise-Project-Id'?: string;
    public body?: FaceSearchBase64Req;
    public constructor(faceSetName?: string) { 
        this['face_set_name'] = faceSetName;
    }
    public withFaceSetName(faceSetName: string): SearchFaceByBase64Request {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string  | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName(): string | undefined {
        return this['face_set_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SearchFaceByBase64Request {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: FaceSearchBase64Req): SearchFaceByBase64Request {
        this['body'] = body;
        return this;
    }
}