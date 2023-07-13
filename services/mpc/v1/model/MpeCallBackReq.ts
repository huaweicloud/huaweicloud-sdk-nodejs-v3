import { MpeMetaData } from './MpeMetaData';


export class MpeCallBackReq {
    private 'task_type'?: MpeCallBackReqTaskTypeEnum | undefined;
    private 'task_id'?: string | undefined;
    public status?: string;
    private 'complete_ratio'?: number | undefined;
    public description?: string;
    private 'meta_data'?: MpeMetaData | undefined;
    public constructor() { 
    }
    public withTaskType(taskType: MpeCallBackReqTaskTypeEnum): MpeCallBackReq {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: MpeCallBackReqTaskTypeEnum | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withTaskId(taskId: string): MpeCallBackReq {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withStatus(status: string): MpeCallBackReq {
        this['status'] = status;
        return this;
    }
    public withCompleteRatio(completeRatio: number): MpeCallBackReq {
        this['complete_ratio'] = completeRatio;
        return this;
    }
    public set completeRatio(completeRatio: number | undefined) {
        this['complete_ratio'] = completeRatio;
    }
    public get completeRatio() {
        return this['complete_ratio'];
    }
    public withDescription(description: string): MpeCallBackReq {
        this['description'] = description;
        return this;
    }
    public withMetaData(metaData: MpeMetaData): MpeCallBackReq {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: MpeMetaData | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData() {
        return this['meta_data'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MpeCallBackReqTaskTypeEnum {
    CONCAT = 'CONCAT',
    AUDIO = 'AUDIO',
    CUT = 'CUT',
    PARSE = 'PARSE',
    MD5 = 'MD5',
    SNAPSHOT = 'SNAPSHOT',
    REMUX = 'REMUX',
    ANIMATION = 'ANIMATION'
}
