import { UpdateValueListRequestBody } from './UpdateValueListRequestBody';


export class UpdateValueListRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public valuelistid: string;
    public body?: UpdateValueListRequestBody;
    public constructor(contentType?: any, valuelistid?: any) { 
        this['Content-Type'] = contentType;
        this['valuelistid'] = valuelistid;
    }
    public withContentType(contentType: string): UpdateValueListRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateValueListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withValuelistid(valuelistid: string): UpdateValueListRequest {
        this['valuelistid'] = valuelistid;
        return this;
    }
    public withBody(body: UpdateValueListRequestBody): UpdateValueListRequest {
        this['body'] = body;
        return this;
    }
}