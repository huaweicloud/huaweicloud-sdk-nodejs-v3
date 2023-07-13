import { EndpointVO } from './EndpointVO';


export class SwitchoverResp {
    private 'job_id'?: string | undefined;
    private 'updated_at'?: string | undefined;
    private 'source_db'?: EndpointVO | undefined;
    private 'target_db'?: EndpointVO | undefined;
    private 'job_direction'?: SwitchoverRespJobDirectionEnum | undefined;
    private 'is_target_readonly'?: boolean | undefined;
    private 'error_msg'?: string | undefined;
    private 'error_code'?: string | undefined;
    public constructor() { 
    }
    public withJobId(jobId: string): SwitchoverResp {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withUpdatedAt(updatedAt: string): SwitchoverResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withSourceDb(sourceDb: EndpointVO): SwitchoverResp {
        this['source_db'] = sourceDb;
        return this;
    }
    public set sourceDb(sourceDb: EndpointVO | undefined) {
        this['source_db'] = sourceDb;
    }
    public get sourceDb() {
        return this['source_db'];
    }
    public withTargetDb(targetDb: EndpointVO): SwitchoverResp {
        this['target_db'] = targetDb;
        return this;
    }
    public set targetDb(targetDb: EndpointVO | undefined) {
        this['target_db'] = targetDb;
    }
    public get targetDb() {
        return this['target_db'];
    }
    public withJobDirection(jobDirection: SwitchoverRespJobDirectionEnum): SwitchoverResp {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: SwitchoverRespJobDirectionEnum | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection() {
        return this['job_direction'];
    }
    public withIsTargetReadonly(isTargetReadonly: boolean): SwitchoverResp {
        this['is_target_readonly'] = isTargetReadonly;
        return this;
    }
    public set isTargetReadonly(isTargetReadonly: boolean | undefined) {
        this['is_target_readonly'] = isTargetReadonly;
    }
    public get isTargetReadonly() {
        return this['is_target_readonly'];
    }
    public withErrorMsg(errorMsg: string): SwitchoverResp {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
    public withErrorCode(errorCode: string): SwitchoverResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchoverRespJobDirectionEnum {
    UP = 'up',
    DOWN = 'down',
    NON_DBS = 'non-dbs'
}
