import { WebImageRequestBody } from './WebImageRequestBody';


export class RecognizeWebImageRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: WebImageRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeWebImageRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: WebImageRequestBody): RecognizeWebImageRequest {
        this['body'] = body;
        return this;
    }
}