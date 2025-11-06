import { UpdatePromInstanceRequestModle } from './UpdatePromInstanceRequestModle';


export class UpdatePromInstanceRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: UpdatePromInstanceRequestModle;
    public constructor(enterpriseProjectId?: string) { 
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdatePromInstanceRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: UpdatePromInstanceRequestModle): UpdatePromInstanceRequest {
        this['body'] = body;
        return this;
    }
}