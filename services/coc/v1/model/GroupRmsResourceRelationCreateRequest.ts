

export class GroupRmsResourceRelationCreateRequest {
    private 'group_id'?: string;
    private 'cmdb_resource_id_list'?: Array<string>;
    public constructor(groupId?: string, cmdbResourceIdList?: Array<string>) { 
        this['group_id'] = groupId;
        this['cmdb_resource_id_list'] = cmdbResourceIdList;
    }
    public withGroupId(groupId: string): GroupRmsResourceRelationCreateRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withCmdbResourceIdList(cmdbResourceIdList: Array<string>): GroupRmsResourceRelationCreateRequest {
        this['cmdb_resource_id_list'] = cmdbResourceIdList;
        return this;
    }
    public set cmdbResourceIdList(cmdbResourceIdList: Array<string>  | undefined) {
        this['cmdb_resource_id_list'] = cmdbResourceIdList;
    }
    public get cmdbResourceIdList(): Array<string> | undefined {
        return this['cmdb_resource_id_list'];
    }
}