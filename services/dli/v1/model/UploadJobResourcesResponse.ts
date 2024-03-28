import { UploadJobResourcesDetail } from './UploadJobResourcesDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadJobResourcesResponse extends SdkResponse {
    private 'group_name'?: string;
    public status?: string;
    public resources?: Array<string>;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'is_async'?: boolean;
    public owner?: string;
    public details?: Array<UploadJobResourcesDetail>;
    public constructor() { 
        super();
    }
    public withGroupName(groupName: string): UploadJobResourcesResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withStatus(status: string): UploadJobResourcesResponse {
        this['status'] = status;
        return this;
    }
    public withResources(resources: Array<string>): UploadJobResourcesResponse {
        this['resources'] = resources;
        return this;
    }
    public withCreateTime(createTime: number): UploadJobResourcesResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): UploadJobResourcesResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withIsAsync(isAsync: boolean): UploadJobResourcesResponse {
        this['is_async'] = isAsync;
        return this;
    }
    public set isAsync(isAsync: boolean  | undefined) {
        this['is_async'] = isAsync;
    }
    public get isAsync(): boolean | undefined {
        return this['is_async'];
    }
    public withOwner(owner: string): UploadJobResourcesResponse {
        this['owner'] = owner;
        return this;
    }
    public withDetails(details: Array<UploadJobResourcesDetail>): UploadJobResourcesResponse {
        this['details'] = details;
        return this;
    }
}