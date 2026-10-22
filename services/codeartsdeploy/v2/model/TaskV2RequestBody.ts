import { DeployV2OperationsDO } from './DeployV2OperationsDO';


export class TaskV2RequestBody {
    private 'deploy_system'?: string;
    private 'template_id'?: string;
    private 'ansible_type'?: number;
    private 'operation_list'?: Array<DeployV2OperationsDO>;
    public constructor() { 
    }
    public withDeploySystem(deploySystem: string): TaskV2RequestBody {
        this['deploy_system'] = deploySystem;
        return this;
    }
    public set deploySystem(deploySystem: string  | undefined) {
        this['deploy_system'] = deploySystem;
    }
    public get deploySystem(): string | undefined {
        return this['deploy_system'];
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
    public withAnsibleType(ansibleType: number): TaskV2RequestBody {
        this['ansible_type'] = ansibleType;
        return this;
    }
    public set ansibleType(ansibleType: number  | undefined) {
        this['ansible_type'] = ansibleType;
    }
    public get ansibleType(): number | undefined {
        return this['ansible_type'];
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