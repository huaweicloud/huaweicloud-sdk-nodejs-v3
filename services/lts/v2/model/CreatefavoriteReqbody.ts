

export class CreatefavoriteReqbody {
    private 'eps_id'?: string | undefined;
    private 'favorite_resource_id': string | undefined;
    private 'favorite_resource_type': string | undefined;
    private 'log_group_id': string | undefined;
    private 'log_group_name'?: string | undefined;
    private 'log_stream_id': string | undefined;
    private 'log_stream_name'?: string | undefined;
    public constructor(favoriteResourceId?: any, favoriteResourceType?: any, logGroupId?: any, logStreamId?: any) { 
        this['favorite_resource_id'] = favoriteResourceId;
        this['favorite_resource_type'] = favoriteResourceType;
        this['log_group_id'] = logGroupId;
        this['log_stream_id'] = logStreamId;
    }
    public withEpsId(epsId: string): CreatefavoriteReqbody {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId() {
        return this['eps_id'];
    }
    public withFavoriteResourceId(favoriteResourceId: string): CreatefavoriteReqbody {
        this['favorite_resource_id'] = favoriteResourceId;
        return this;
    }
    public set favoriteResourceId(favoriteResourceId: string | undefined) {
        this['favorite_resource_id'] = favoriteResourceId;
    }
    public get favoriteResourceId() {
        return this['favorite_resource_id'];
    }
    public withFavoriteResourceType(favoriteResourceType: string): CreatefavoriteReqbody {
        this['favorite_resource_type'] = favoriteResourceType;
        return this;
    }
    public set favoriteResourceType(favoriteResourceType: string | undefined) {
        this['favorite_resource_type'] = favoriteResourceType;
    }
    public get favoriteResourceType() {
        return this['favorite_resource_type'];
    }
    public withLogGroupId(logGroupId: string): CreatefavoriteReqbody {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogGroupName(logGroupName: string): CreatefavoriteReqbody {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName() {
        return this['log_group_name'];
    }
    public withLogStreamId(logStreamId: string): CreatefavoriteReqbody {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId() {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): CreatefavoriteReqbody {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName() {
        return this['log_stream_name'];
    }
}