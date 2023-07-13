import { DetectFaceByFileRequestBody } from './DetectFaceByFileRequestBody';


export class DetectFaceByFileRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: DetectFaceByFileRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectFaceByFileRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: DetectFaceByFileRequestBody): DetectFaceByFileRequest {
        this['body'] = body;
        return this;
    }
}