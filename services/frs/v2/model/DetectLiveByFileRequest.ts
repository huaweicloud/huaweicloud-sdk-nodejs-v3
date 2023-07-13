import { DetectLiveByFileRequestBody } from './DetectLiveByFileRequestBody';


export class DetectLiveByFileRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: DetectLiveByFileRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectLiveByFileRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: DetectLiveByFileRequestBody): DetectLiveByFileRequest {
        this['body'] = body;
        return this;
    }
}