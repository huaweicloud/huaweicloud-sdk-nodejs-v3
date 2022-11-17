import { GeneralTableRequestBody } from './GeneralTableRequestBody';


export class RecognizeGeneralTableRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: GeneralTableRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeGeneralTableRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: GeneralTableRequestBody): RecognizeGeneralTableRequest {
        this['body'] = body;
        return this;
    }
}