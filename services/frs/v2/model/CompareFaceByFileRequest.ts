import { CompareFaceByFileRequestBody } from './CompareFaceByFileRequestBody';


export class CompareFaceByFileRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: CompareFaceByFileRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CompareFaceByFileRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: CompareFaceByFileRequestBody): CompareFaceByFileRequest {
        this['body'] = body;
        return this;
    }
}