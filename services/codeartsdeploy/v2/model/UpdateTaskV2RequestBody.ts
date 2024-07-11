import { DeployV2OperationsDO } from './DeployV2OperationsDO';


export class UpdateTaskV2RequestBody {
    public id?: string;
    private 'deploy_system'?: UpdateTaskV2RequestBodyDeploySystemEnum | string;
    private 'template_id'?: string;
    private 'operation_list'?: Array<DeployV2OperationsDO>;
    public constructor() { 
    }
    public withId(id: string): UpdateTaskV2RequestBody {
        this['id'] = id;
        return this;
    }
    public withDeploySystem(deploySystem: UpdateTaskV2RequestBodyDeploySystemEnum | string): UpdateTaskV2RequestBody {
        this['deploy_system'] = deploySystem;
        return this;
    }
    public set deploySystem(deploySystem: UpdateTaskV2RequestBodyDeploySystemEnum | string  | undefined) {
        this['deploy_system'] = deploySystem;
    }
    public get deploySystem(): UpdateTaskV2RequestBodyDeploySystemEnum | string | undefined {
        return this['deploy_system'];
    }
    public withTemplateId(templateId: string): UpdateTaskV2RequestBody {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withOperationList(operationList: Array<DeployV2OperationsDO>): UpdateTaskV2RequestBody {
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

/**
    * @export
    * @enum {string}
    */
export enum UpdateTaskV2RequestBodyDeploySystemEnum {
    DEPLOYTEMPLATE = 'deployTemplate'
}
