import { IvsStandardByVideoAndIdCardImageRequestBody } from './IvsStandardByVideoAndIdCardImageRequestBody';


export class DetectStandardByVideoAndIdCardImageRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: IvsStandardByVideoAndIdCardImageRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectStandardByVideoAndIdCardImageRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: IvsStandardByVideoAndIdCardImageRequestBody): DetectStandardByVideoAndIdCardImageRequest {
        this['body'] = body;
        return this;
    }
}