import { WaybillElectronicRequestBody } from './WaybillElectronicRequestBody';


export class RecognizeWaybillElectronicRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: WaybillElectronicRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeWaybillElectronicRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: WaybillElectronicRequestBody): RecognizeWaybillElectronicRequest {
        this['body'] = body;
        return this;
    }
}