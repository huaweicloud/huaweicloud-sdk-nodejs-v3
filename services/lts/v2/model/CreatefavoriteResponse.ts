
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatefavoriteResponse extends SdkResponse {
    private 'create_time'?: number;
    private 'eps_id'?: string;
    private 'favorite_resource_id'?: string;
    private 'favorite_resource_type'?: string;
    private 'log_group_id'?: string;
    private 'log_group_name'?: string;
    private 'log_stream_id'?: string;
    private 'log_stream_name'?: string;
    private 'project_id'?: string;
    private 'is_global'?: boolean;
    public constructor() { 
        super();
    }
    public withCreateTime(createTime: number): CreatefavoriteResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withEpsId(epsId: string): CreatefavoriteResponse {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withFavoriteResourceId(favoriteResourceId: string): CreatefavoriteResponse {
        this['favorite_resource_id'] = favoriteResourceId;
        return this;
    }
    public set favoriteResourceId(favoriteResourceId: string  | undefined) {
        this['favorite_resource_id'] = favoriteResourceId;
    }
    public get favoriteResourceId(): string | undefined {
        return this['favorite_resource_id'];
    }
    public withFavoriteResourceType(favoriteResourceType: string): CreatefavoriteResponse {
        this['favorite_resource_type'] = favoriteResourceType;
        return this;
    }
    public set favoriteResourceType(favoriteResourceType: string  | undefined) {
        this['favorite_resource_type'] = favoriteResourceType;
    }
    public get favoriteResourceType(): string | undefined {
        return this['favorite_resource_type'];
    }
    public withLogGroupId(logGroupId: string): CreatefavoriteResponse {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogGroupName(logGroupName: string): CreatefavoriteResponse {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withLogStreamId(logStreamId: string): CreatefavoriteResponse {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): CreatefavoriteResponse {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
    public withProjectId(projectId: string): CreatefavoriteResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIsGlobal(isGlobal: boolean): CreatefavoriteResponse {
        this['is_global'] = isGlobal;
        return this;
    }
    public set isGlobal(isGlobal: boolean  | undefined) {
        this['is_global'] = isGlobal;
    }
    public get isGlobal(): boolean | undefined {
        return this['is_global'];
    }
}