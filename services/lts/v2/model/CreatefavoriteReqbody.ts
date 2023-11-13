

export class CreatefavoriteReqbody {
    private 'eps_id'?: string;
    private 'favorite_resource_id'?: string;
    private 'favorite_resource_type'?: string;
    private 'log_group_id'?: string;
    private 'log_group_name'?: string;
    private 'log_stream_id'?: string;
    private 'log_stream_name'?: string;
    private 'is_global'?: boolean;
    public constructor(favoriteResourceId?: string, favoriteResourceType?: string, logGroupId?: string, logStreamId?: string, isGlobal?: boolean) { 
        this['favorite_resource_id'] = favoriteResourceId;
        this['favorite_resource_type'] = favoriteResourceType;
        this['log_group_id'] = logGroupId;
        this['log_stream_id'] = logStreamId;
        this['is_global'] = isGlobal;
    }
    public withEpsId(epsId: string): CreatefavoriteReqbody {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withFavoriteResourceId(favoriteResourceId: string): CreatefavoriteReqbody {
        this['favorite_resource_id'] = favoriteResourceId;
        return this;
    }
    public set favoriteResourceId(favoriteResourceId: string  | undefined) {
        this['favorite_resource_id'] = favoriteResourceId;
    }
    public get favoriteResourceId(): string | undefined {
        return this['favorite_resource_id'];
    }
    public withFavoriteResourceType(favoriteResourceType: string): CreatefavoriteReqbody {
        this['favorite_resource_type'] = favoriteResourceType;
        return this;
    }
    public set favoriteResourceType(favoriteResourceType: string  | undefined) {
        this['favorite_resource_type'] = favoriteResourceType;
    }
    public get favoriteResourceType(): string | undefined {
        return this['favorite_resource_type'];
    }
    public withLogGroupId(logGroupId: string): CreatefavoriteReqbody {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogGroupName(logGroupName: string): CreatefavoriteReqbody {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withLogStreamId(logStreamId: string): CreatefavoriteReqbody {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): CreatefavoriteReqbody {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
    public withIsGlobal(isGlobal: boolean): CreatefavoriteReqbody {
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