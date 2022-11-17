import { ExitEntryPermitRequestBody } from './ExitEntryPermitRequestBody';


export class RecognizeExitEntryPermitRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: ExitEntryPermitRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeExitEntryPermitRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: ExitEntryPermitRequestBody): RecognizeExitEntryPermitRequest {
        this['body'] = body;
        return this;
    }
}