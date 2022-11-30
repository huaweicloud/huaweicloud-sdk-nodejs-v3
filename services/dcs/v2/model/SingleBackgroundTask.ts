import { DetailsBody } from './DetailsBody';


export class SingleBackgroundTask {
    public id?: string;
    public name?: string;
    public details?: DetailsBody;
    private 'user_name'?: string | undefined;
    private 'user_id'?: string | undefined;
    public params?: string;
    public status?: string;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    private 'enable_show'?: boolean | undefined;
    public constructor() { 
    }
    public withId(id: string): SingleBackgroundTask {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SingleBackgroundTask {
        this['name'] = name;
        return this;
    }
    public withDetails(details: DetailsBody): SingleBackgroundTask {
        this['details'] = details;
        return this;
    }
    public withUserName(userName: string): SingleBackgroundTask {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withUserId(userId: string): SingleBackgroundTask {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withParams(params: string): SingleBackgroundTask {
        this['params'] = params;
        return this;
    }
    public withStatus(status: string): SingleBackgroundTask {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): SingleBackgroundTask {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): SingleBackgroundTask {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withEnableShow(enableShow: boolean): SingleBackgroundTask {
        this['enable_show'] = enableShow;
        return this;
    }
    public set enableShow(enableShow: boolean | undefined) {
        this['enable_show'] = enableShow;
    }
    public get enableShow() {
        return this['enable_show'];
    }
}