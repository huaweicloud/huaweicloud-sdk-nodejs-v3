import { IvsStandardByIdCardImageRequestBody } from './IvsStandardByIdCardImageRequestBody';


export class DetectStandardByIdCardImageRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: IvsStandardByIdCardImageRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectStandardByIdCardImageRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: IvsStandardByIdCardImageRequestBody): DetectStandardByIdCardImageRequest {
        this['body'] = body;
        return this;
    }
}