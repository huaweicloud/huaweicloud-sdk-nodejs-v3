

export class OfflineTaskInfo {
    public id?: string;
    public name?: string;
    public status?: OfflineTaskInfoStatusEnum | string;
    private 'engine_type'?: OfflineTaskInfoEngineTypeEnum | string;
    private 'error_log'?: string;
    public description?: string;
    private 'create_time'?: string;
    private 'finish_time'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(id?: string, name?: string, status?: string, engineType?: string, createTime?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['engine_type'] = engineType;
        this['create_time'] = createTime;
    }
    public withId(id: string): OfflineTaskInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): OfflineTaskInfo {
        this['name'] = name;
        return this;
    }
    public withStatus(status: OfflineTaskInfoStatusEnum | string): OfflineTaskInfo {
        this['status'] = status;
        return this;
    }
    public withEngineType(engineType: OfflineTaskInfoEngineTypeEnum | string): OfflineTaskInfo {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: OfflineTaskInfoEngineTypeEnum | string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): OfflineTaskInfoEngineTypeEnum | string | undefined {
        return this['engine_type'];
    }
    public withErrorLog(errorLog: string): OfflineTaskInfo {
        this['error_log'] = errorLog;
        return this;
    }
    public set errorLog(errorLog: string  | undefined) {
        this['error_log'] = errorLog;
    }
    public get errorLog(): string | undefined {
        return this['error_log'];
    }
    public withDescription(description: string): OfflineTaskInfo {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): OfflineTaskInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withFinishTime(finishTime: string): OfflineTaskInfo {
        this['finish_time'] = finishTime;
        return this;
    }
    public set finishTime(finishTime: string  | undefined) {
        this['finish_time'] = finishTime;
    }
    public get finishTime(): string | undefined {
        return this['finish_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): OfflineTaskInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OfflineTaskInfoStatusEnum {
    TRANSFERRING = 'TRANSFERRING',
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
    PRECHECK_FAILED = 'PRECHECK FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum OfflineTaskInfoEngineTypeEnum {
    SQLSERVER = 'sqlserver'
}
