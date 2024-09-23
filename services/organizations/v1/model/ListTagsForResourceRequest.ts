

export class ListTagsForResourceRequest {
    private 'X-Security-Token'?: string;
    private 'resource_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withXSecurityToken(xSecurityToken: string): ListTagsForResourceRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withResourceId(resourceId: string): ListTagsForResourceRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withLimit(limit: number): ListTagsForResourceRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListTagsForResourceRequest {
        this['marker'] = marker;
        return this;
    }
}