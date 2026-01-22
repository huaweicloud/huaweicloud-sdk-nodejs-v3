import { IpsCustomerBatchDto } from './IpsCustomerBatchDto';


export class BatchUpdateCustomerIpsActionRequest {
    private 'project_id'?: string;
    public body?: IpsCustomerBatchDto;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchUpdateCustomerIpsActionRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: IpsCustomerBatchDto): BatchUpdateCustomerIpsActionRequest {
        this['body'] = body;
        return this;
    }
}