import { CheckpointExtraInfoResp } from './CheckpointExtraInfoResp';
import { CheckpointPlanCreate } from './CheckpointPlanCreate';


export class CheckpointCreate {
    private 'created_at': string | undefined;
    public id: string;
    private 'project_id': string | undefined;
    public status: CheckpointCreateStatusEnum;
    public vault?: CheckpointPlanCreate;
    private 'extra_info'?: CheckpointExtraInfoResp | undefined;
    public constructor(createdAt?: any, id?: any, projectId?: any, status?: any) { 
        this['created_at'] = createdAt;
        this['id'] = id;
        this['project_id'] = projectId;
        this['status'] = status;
    }
    public withCreatedAt(createdAt: string): CheckpointCreate {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withId(id: string): CheckpointCreate {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): CheckpointCreate {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withStatus(status: CheckpointCreateStatusEnum): CheckpointCreate {
        this['status'] = status;
        return this;
    }
    public withVault(vault: CheckpointPlanCreate): CheckpointCreate {
        this['vault'] = vault;
        return this;
    }
    public withExtraInfo(extraInfo: CheckpointExtraInfoResp): CheckpointCreate {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: CheckpointExtraInfoResp | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo() {
        return this['extra_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckpointCreateStatusEnum {
    AVAILABLE = 'available',
    DELETING = 'deleting',
    PROTECTING = 'protecting',
    DELETED = 'deleted',
    ERROR_DELETING = 'error-deleting',
    ERROR = 'error'
}
