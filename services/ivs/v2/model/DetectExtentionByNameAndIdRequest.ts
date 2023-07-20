import { IvsExtentionByNameAndIdRequestBody } from './IvsExtentionByNameAndIdRequestBody';


export class DetectExtentionByNameAndIdRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: IvsExtentionByNameAndIdRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectExtentionByNameAndIdRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: IvsExtentionByNameAndIdRequestBody): DetectExtentionByNameAndIdRequest {
        this['body'] = body;
        return this;
    }
}