import { CreateFaceSetReq } from './CreateFaceSetReq';


export class CreateFaceSetRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: CreateFaceSetReq;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateFaceSetRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: CreateFaceSetReq): CreateFaceSetRequest {
        this['body'] = body;
        return this;
    }
}