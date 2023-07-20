import { DetectFaceByFileIntlRequestBody } from './DetectFaceByFileIntlRequestBody';


export class DetectFaceByFileIntlRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: DetectFaceByFileIntlRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectFaceByFileIntlRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: DetectFaceByFileIntlRequestBody): DetectFaceByFileIntlRequest {
        this['body'] = body;
        return this;
    }
}