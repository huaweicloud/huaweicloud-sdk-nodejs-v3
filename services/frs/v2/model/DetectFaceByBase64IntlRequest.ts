import { FaceDetectBase64Req } from './FaceDetectBase64Req';


export class DetectFaceByBase64IntlRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: FaceDetectBase64Req;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectFaceByBase64IntlRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: FaceDetectBase64Req): DetectFaceByBase64IntlRequest {
        this['body'] = body;
        return this;
    }
}