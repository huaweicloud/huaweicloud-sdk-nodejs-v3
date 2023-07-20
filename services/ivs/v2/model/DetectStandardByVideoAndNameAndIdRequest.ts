import { IvsStandardByVideoAndNameAndIdRequestBody } from './IvsStandardByVideoAndNameAndIdRequestBody';


export class DetectStandardByVideoAndNameAndIdRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: IvsStandardByVideoAndNameAndIdRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectStandardByVideoAndNameAndIdRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: IvsStandardByVideoAndNameAndIdRequestBody): DetectStandardByVideoAndNameAndIdRequest {
        this['body'] = body;
        return this;
    }
}