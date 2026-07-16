import { DevServerJobItem } from './DevServerJobItem';
import { DevServerTaskResponse } from './DevServerTaskResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDevServerJobResponse extends SdkResponse {
    private 'create_at'?: string;
    private 'update_at'?: string;
    public id?: string;
    public name?: string;
    public type?: string;
    public status?: string;
    public items?: Array<DevServerJobItem>;
    public tasks?: Array<DevServerTaskResponse>;
    private 'template_id'?: string;
    private 'user_name'?: string;
    private 'abnormal_count'?: number;
    public description?: string;
    public constructor() { 
        super();
    }
    public withCreateAt(createAt: string): CreateDevServerJobResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: string): CreateDevServerJobResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
    public withId(id: string): CreateDevServerJobResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateDevServerJobResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: string): CreateDevServerJobResponse {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): CreateDevServerJobResponse {
        this['status'] = status;
        return this;
    }
    public withItems(items: Array<DevServerJobItem>): CreateDevServerJobResponse {
        this['items'] = items;
        return this;
    }
    public withTasks(tasks: Array<DevServerTaskResponse>): CreateDevServerJobResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withTemplateId(templateId: string): CreateDevServerJobResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withUserName(userName: string): CreateDevServerJobResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAbnormalCount(abnormalCount: number): CreateDevServerJobResponse {
        this['abnormal_count'] = abnormalCount;
        return this;
    }
    public set abnormalCount(abnormalCount: number  | undefined) {
        this['abnormal_count'] = abnormalCount;
    }
    public get abnormalCount(): number | undefined {
        return this['abnormal_count'];
    }
    public withDescription(description: string): CreateDevServerJobResponse {
        this['description'] = description;
        return this;
    }
}