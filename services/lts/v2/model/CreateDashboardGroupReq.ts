

export class CreateDashboardGroupReq {
    private 'group_name': string | undefined;
    public constructor(groupName?: any) { 
        this['group_name'] = groupName;
    }
    public withGroupName(groupName: string): CreateDashboardGroupReq {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName() {
        return this['group_name'];
    }
}