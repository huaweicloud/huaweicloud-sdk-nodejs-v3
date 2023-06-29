

export class AgenciesTaskReq {
    private 'project_id'?: string | undefined;
    private 'operate_type': AgenciesTaskReqOperateTypeEnum | undefined;
    public constructor(operateType?: any) { 
        this['operate_type'] = operateType;
    }
    public withProjectId(projectId: string): AgenciesTaskReq {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withOperateType(operateType: AgenciesTaskReqOperateTypeEnum): AgenciesTaskReq {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: AgenciesTaskReqOperateTypeEnum | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType() {
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
