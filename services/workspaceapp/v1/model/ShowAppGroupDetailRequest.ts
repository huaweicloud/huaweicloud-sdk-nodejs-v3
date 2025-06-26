

export class ShowAppGroupDetailRequest {
    private 'app_group_id'?: string;
    public constructor(appGroupId?: string) { 
        this['app_group_id'] = appGroupId;
    }
    public withAppGroupId(appGroupId: string): ShowAppGroupDetailRequest {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
}