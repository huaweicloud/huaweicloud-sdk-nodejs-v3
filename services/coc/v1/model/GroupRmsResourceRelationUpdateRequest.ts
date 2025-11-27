

export class GroupRmsResourceRelationUpdateRequest {
    private 'id_list'?: Array<string>;
    private 'group_id'?: string;
    public constructor(idList?: Array<string>, groupId?: string) { 
        this['id_list'] = idList;
        this['group_id'] = groupId;
    }
    public withIdList(idList: Array<string>): GroupRmsResourceRelationUpdateRequest {
        this['id_list'] = idList;
        return this;
    }
    public set idList(idList: Array<string>  | undefined) {
        this['id_list'] = idList;
    }
    public get idList(): Array<string> | undefined {
        return this['id_list'];
    }
    public withGroupId(groupId: string): GroupRmsResourceRelationUpdateRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}