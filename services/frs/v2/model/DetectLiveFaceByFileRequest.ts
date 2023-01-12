import { DetectLiveFaceByFileRequestBody } from './DetectLiveFaceByFileRequestBody';


export class DetectLiveFaceByFileRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: DetectLiveFaceByFileRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectLiveFaceByFileRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: DetectLiveFaceByFileRequestBody): DetectLiveFaceByFileRequest {
        this['body'] = body;
        return this;
    }
}