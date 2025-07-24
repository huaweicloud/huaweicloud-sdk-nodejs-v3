

export class ListAlertGroupsByConditionRequestBody {
    private 'group_id'?: string;
    private 'group_ids'?: Array<string>;
    private 'page_num'?: number;
    private 'page_size'?: number;
    private 'test_service_id'?: string;
    public userIds?: Array<string>;
    public userName?: string;
    public constructor() { 
    }
    public withGroupId(groupId: string): ListAlertGroupsByConditionRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupIds(groupIds: Array<string>): ListAlertGroupsByConditionRequestBody {
        this['group_ids'] = groupIds;
        return this;
    }
    public set groupIds(groupIds: Array<string>  | undefined) {
        this['group_ids'] = groupIds;
    }
    public get groupIds(): Array<string> | undefined {
        return this['group_ids'];
    }
    public withPageNum(pageNum: number): ListAlertGroupsByConditionRequestBody {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withPageSize(pageSize: number): ListAlertGroupsByConditionRequestBody {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withTestServiceId(testServiceId: string): ListAlertGroupsByConditionRequestBody {
        this['test_service_id'] = testServiceId;
        return this;
    }
    public set testServiceId(testServiceId: string  | undefined) {
        this['test_service_id'] = testServiceId;
    }
    public get testServiceId(): string | undefined {
        return this['test_service_id'];
    }
    public withUserIds(userIds: Array<string>): ListAlertGroupsByConditionRequestBody {
        this['userIds'] = userIds;
        return this;
    }
    public withUserName(userName: string): ListAlertGroupsByConditionRequestBody {
        this['userName'] = userName;
        return this;
    }
}