import { EndpointVO } from './EndpointVO';


export class SwitchoverResp {
    private 'job_id'?: string;
    private 'updated_at'?: string;
    private 'source_db'?: EndpointVO;
    private 'target_db'?: EndpointVO;
    private 'job_direction'?: SwitchoverRespJobDirectionEnum | string;
    private 'is_target_readonly'?: boolean;
    private 'error_msg'?: string;
    private 'error_code'?: string;
    public constructor() { 
    }
    public withJobId(jobId: string): SwitchoverResp {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withUpdatedAt(updatedAt: string): SwitchoverResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withSourceDb(sourceDb: EndpointVO): SwitchoverResp {
        this['source_db'] = sourceDb;
        return this;
    }
    public set sourceDb(sourceDb: EndpointVO  | undefined) {
        this['source_db'] = sourceDb;
    }
    public get sourceDb(): EndpointVO | undefined {
        return this['source_db'];
    }
    public withTargetDb(targetDb: EndpointVO): SwitchoverResp {
        this['target_db'] = targetDb;
        return this;
    }
    public set targetDb(targetDb: EndpointVO  | undefined) {
        this['target_db'] = targetDb;
    }
    public get targetDb(): EndpointVO | undefined {
        return this['target_db'];
    }
    public withJobDirection(jobDirection: SwitchoverRespJobDirectionEnum | string): SwitchoverResp {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: SwitchoverRespJobDirectionEnum | string  | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection(): SwitchoverRespJobDirectionEnum | string | undefined {
        return this['job_direction'];
    }
    public withIsTargetReadonly(isTargetReadonly: boolean): SwitchoverResp {
        this['is_target_readonly'] = isTargetReadonly;
        return this;
    }
    public set isTargetReadonly(isTargetReadonly: boolean  | undefined) {
        this['is_target_readonly'] = isTargetReadonly;
    }
    public get isTargetReadonly(): boolean | undefined {
        return this['is_target_readonly'];
    }
    public withErrorMsg(errorMsg: string): SwitchoverResp {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withErrorCode(errorCode: string): SwitchoverResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
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
