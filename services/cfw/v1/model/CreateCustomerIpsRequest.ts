import { CustomerIpsSaveDto } from './CustomerIpsSaveDto';


export class CreateCustomerIpsRequest {
    private 'project_id'?: string;
    public body?: CustomerIpsSaveDto;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateCustomerIpsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CustomerIpsSaveDto): CreateCustomerIpsRequest {
        this['body'] = body;
        return this;
    }
}