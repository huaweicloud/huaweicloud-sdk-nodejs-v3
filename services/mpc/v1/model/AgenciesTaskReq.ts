

export class AgenciesTaskReq {
    private 'project_id'?: string;
    private 'operate_type'?: AgenciesTaskReqOperateTypeEnum | string;
    public constructor(operateType?: string) { 
        this['operate_type'] = operateType;
    }
    public withProjectId(projectId: string): AgenciesTaskReq {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOperateType(operateType: AgenciesTaskReqOperateTypeEnum | string): AgenciesTaskReq {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: AgenciesTaskReqOperateTypeEnum | string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): AgenciesTaskReqOperateTypeEnum | string | undefined {
        return this['operate_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AgenciesTaskReqOperateTypeEnum {
    CREATED = 'CREATED',
    CANCELED = 'CANCELED'
}
