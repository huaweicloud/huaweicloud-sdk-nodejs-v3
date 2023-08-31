import { DeployV2OperationsDO } from './DeployV2OperationsDO';


export class TaskV2RequestBody {
    private 'template_id'?: string;
    private 'operation_list'?: Array<DeployV2OperationsDO>;
    public constructor() { 
    }
    public withTemplateId(templateId: string): TaskV2RequestBody {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withOperationList(operationList: Array<DeployV2OperationsDO>): TaskV2RequestBody {
        this['operation_list'] = operationList;
        return this;
    }
    public set operationList(operationList: Array<DeployV2OperationsDO>  | undefined) {
        this['operation_list'] = operationList;
    }
    public get operationList(): Array<DeployV2OperationsDO> | undefined {
        return this['operation_list'];
    }
}