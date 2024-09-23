

export class ListEntitiesRequest {
    private 'X-Security-Token'?: string;
    private 'parent_id'?: string;
    private 'child_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): ListEntitiesRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withParentId(parentId: string): ListEntitiesRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withChildId(childId: string): ListEntitiesRequest {
        this['child_id'] = childId;
        return this;
    }
    public set childId(childId: string  | undefined) {
        this['child_id'] = childId;
    }
    public get childId(): string | undefined {
        return this['child_id'];
    }
    public withLimit(limit: number): ListEntitiesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListEntitiesRequest {
        this['marker'] = marker;
        return this;
    }
}