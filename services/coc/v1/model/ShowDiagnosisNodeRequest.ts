

export class ShowDiagnosisNodeRequest {
    private 'task_id'?: string;
    public code?: ShowDiagnosisNodeRequestCodeEnum | string;
    private 'instance_id'?: string;
    public constructor(taskId?: string, code?: string, instanceId?: string) { 
        this['task_id'] = taskId;
        this['code'] = code;
        this['instance_id'] = instanceId;
    }
    public withTaskId(taskId: string): ShowDiagnosisNodeRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withCode(code: ShowDiagnosisNodeRequestCodeEnum | string): ShowDiagnosisNodeRequest {
        this['code'] = code;
        return this;
    }
    public withInstanceId(instanceId: string): ShowDiagnosisNodeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDiagnosisNodeRequestCodeEnum {
    HOLMESINSTALL = 'holmesInstall',
    DATACOLLECTION = 'dataCollection',
    DIAGNOSISFAULT = 'diagnosisFault',
    HOLMESUNINSTALL = 'holmesUnInstall',
    RDSDIAGNOSIS = 'rdsDiagnosis',
    DCSDIAGNOSIS = 'dcsDiagnosis',
    DMSDIAGNOSIS = 'dmsDiagnosis',
    ELBDIAGNOSIS = 'elbDiagnosis'
}
