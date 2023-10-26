import { DetailsBody } from './DetailsBody';


export class ListCenterTasksResp {
    public id?: string;
    public name?: string;
    public details?: DetailsBody;
    private 'user_name'?: string;
    private 'user_id'?: string;
    public params?: string;
    public status?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'error_code'?: string;
    private 'enable_show'?: boolean;
    private 'job_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ListCenterTasksResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListCenterTasksResp {
        this['name'] = name;
        return this;
    }
    public withDetails(details: DetailsBody): ListCenterTasksResp {
        this['details'] = details;
        return this;
    }
    public withUserName(userName: string): ListCenterTasksResp {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserId(userId: string): ListCenterTasksResp {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withParams(params: string): ListCenterTasksResp {
        this['params'] = params;
        return this;
    }
    public withStatus(status: string): ListCenterTasksResp {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): ListCenterTasksResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ListCenterTasksResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withErrorCode(errorCode: string): ListCenterTasksResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withEnableShow(enableShow: boolean): ListCenterTasksResp {
        this['enable_show'] = enableShow;
        return this;
    }
    public set enableShow(enableShow: boolean  | undefined) {
        this['enable_show'] = enableShow;
    }
    public get enableShow(): boolean | undefined {
        return this['enable_show'];
    }
    public withJobId(jobId: string): ListCenterTasksResp {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}