import { UploadPackageGroupDetailsResp } from './UploadPackageGroupDetailsResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadResourcesResponse extends SdkResponse {
    private 'group_name'?: string;
    public status?: string;
    public resources?: Array<string>;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'is_async'?: boolean;
    public owner?: string;
    public details?: Array<UploadPackageGroupDetailsResp>;
    public constructor() { 
        super();
    }
    public withGroupName(groupName: string): UploadResourcesResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withStatus(status: string): UploadResourcesResponse {
        this['status'] = status;
        return this;
    }
    public withResources(resources: Array<string>): UploadResourcesResponse {
        this['resources'] = resources;
        return this;
    }
    public withCreateTime(createTime: number): UploadResourcesResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): UploadResourcesResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withIsAsync(isAsync: boolean): UploadResourcesResponse {
        this['is_async'] = isAsync;
        return this;
    }
    public set isAsync(isAsync: boolean  | undefined) {
        this['is_async'] = isAsync;
    }
    public get isAsync(): boolean | undefined {
        return this['is_async'];
    }
    public withOwner(owner: string): UploadResourcesResponse {
        this['owner'] = owner;
        return this;
    }
    public withDetails(details: Array<UploadPackageGroupDetailsResp>): UploadResourcesResponse {
        this['details'] = details;
        return this;
    }
}