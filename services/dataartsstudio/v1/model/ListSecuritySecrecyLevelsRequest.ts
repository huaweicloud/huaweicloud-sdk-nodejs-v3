

export class ListSecuritySecrecyLevelsRequest {
    public workspace?: string;
    public offset?: number;
    public limit?: number;
    private 'order_by'?: ListSecuritySecrecyLevelsRequestOrderByEnum | string;
    public desc?: boolean;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListSecuritySecrecyLevelsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withOffset(offset: number): ListSecuritySecrecyLevelsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSecuritySecrecyLevelsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrderBy(orderBy: ListSecuritySecrecyLevelsRequestOrderByEnum | string): ListSecuritySecrecyLevelsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListSecuritySecrecyLevelsRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListSecuritySecrecyLevelsRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withDesc(desc: boolean): ListSecuritySecrecyLevelsRequest {
        this['desc'] = desc;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecuritySecrecyLevelsRequestOrderByEnum {
    CREATEDAT = 'createdAt',
    CREATEDBY = 'createdBy',
    UPDATEDAT = 'updatedAt',
    UPDATEDBY = 'updatedBy',
    NAME = 'name',
    DESCRIPTION = 'description'
}
