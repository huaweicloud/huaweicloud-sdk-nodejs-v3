import { DetectLiveByFileIntlRequestBody } from './DetectLiveByFileIntlRequestBody';


export class DetectLiveByFileIntlRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: DetectLiveByFileIntlRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectLiveByFileIntlRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: DetectLiveByFileIntlRequestBody): DetectLiveByFileIntlRequest {
        this['body'] = body;
        return this;
    }
}