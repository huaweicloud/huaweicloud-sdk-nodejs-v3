import { MainlandTravelPermitRequestBody } from './MainlandTravelPermitRequestBody';


export class RecognizeMainlandTravelPermitRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: MainlandTravelPermitRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeMainlandTravelPermitRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: MainlandTravelPermitRequestBody): RecognizeMainlandTravelPermitRequest {
        this['body'] = body;
        return this;
    }
}