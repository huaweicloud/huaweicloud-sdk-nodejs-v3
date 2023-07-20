

export class CreateDashBoardReqBody {
    private 'group_name'?: string;
    public title?: string;
    public constructor(title?: string) { 
        this['title'] = title;
    }
    public withGroupName(groupName: string): CreateDashBoardReqBody {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withTitle(title: string): CreateDashBoardReqBody {
        this['title'] = title;
        return this;
    }
}