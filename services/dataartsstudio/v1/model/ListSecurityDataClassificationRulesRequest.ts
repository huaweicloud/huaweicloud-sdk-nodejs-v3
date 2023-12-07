

export class ListSecurityDataClassificationRulesRequest {
    public workspace?: string;
    public offset?: number;
    public limit?: number;
    private 'secrecy_level'?: string;
    public name?: string;
    public creator?: string;
    public enable?: boolean;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'order_by'?: ListSecurityDataClassificationRulesRequestOrderByEnum | string;
    public desc?: boolean;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListSecurityDataClassificationRulesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withOffset(offset: number): ListSecurityDataClassificationRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSecurityDataClassificationRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSecrecyLevel(secrecyLevel: string): ListSecurityDataClassificationRulesRequest {
        this['secrecy_level'] = secrecyLevel;
        return this;
    }
    public set secrecyLevel(secrecyLevel: string  | undefined) {
        this['secrecy_level'] = secrecyLevel;
    }
    public get secrecyLevel(): string | undefined {
        return this['secrecy_level'];
    }
    public withName(name: string): ListSecurityDataClassificationRulesRequest {
        this['name'] = name;
        return this;
    }
    public withCreator(creator: string): ListSecurityDataClassificationRulesRequest {
        this['creator'] = creator;
        return this;
    }
    public withEnable(enable: boolean): ListSecurityDataClassificationRulesRequest {
        this['enable'] = enable;
        return this;
    }
    public withStartTime(startTime: number): ListSecurityDataClassificationRulesRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListSecurityDataClassificationRulesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withOrderBy(orderBy: ListSecurityDataClassificationRulesRequestOrderByEnum | string): ListSecurityDataClassificationRulesRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListSecurityDataClassificationRulesRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListSecurityDataClassificationRulesRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withDesc(desc: boolean): ListSecurityDataClassificationRulesRequest {
        this['desc'] = desc;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecurityDataClassificationRulesRequestOrderByEnum {
    CREATEDAT = 'createdAt',
    CREATEDBY = 'createdBy',
    UPDATEDAT = 'updatedAt',
    UPDATEDBY = 'updatedBy',
    NAME = 'name',
    DESCRIPTION = 'description'
}
