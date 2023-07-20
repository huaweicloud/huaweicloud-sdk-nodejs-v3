import { IvsStandardByNameAndIdRequestBody } from './IvsStandardByNameAndIdRequestBody';


export class DetectStandardByNameAndIdRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: IvsStandardByNameAndIdRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectStandardByNameAndIdRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: IvsStandardByNameAndIdRequestBody): DetectStandardByNameAndIdRequest {
        this['body'] = body;
        return this;
    }
}