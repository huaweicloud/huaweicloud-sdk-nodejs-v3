

export class BusinessTopoRequest {
    private 'target_business_id'?: number;
    private 'env_tag_list'?: Array<number>;
    public direction?: string;
    private 'end_time'?: string;
    private 'start_time'?: string;
    private 'filter_user'?: boolean;
    public constructor(targetBusinessId?: number, endTime?: string, startTime?: string) { 
        this['target_business_id'] = targetBusinessId;
        this['end_time'] = endTime;
        this['start_time'] = startTime;
    }
    public withTargetBusinessId(targetBusinessId: number): BusinessTopoRequest {
        this['target_business_id'] = targetBusinessId;
        return this;
    }
    public set targetBusinessId(targetBusinessId: number  | undefined) {
        this['target_business_id'] = targetBusinessId;
    }
    public get targetBusinessId(): number | undefined {
        return this['target_business_id'];
    }
    public withEnvTagList(envTagList: Array<number>): BusinessTopoRequest {
        this['env_tag_list'] = envTagList;
        return this;
    }
    public set envTagList(envTagList: Array<number>  | undefined) {
        this['env_tag_list'] = envTagList;
    }
    public get envTagList(): Array<number> | undefined {
        return this['env_tag_list'];
    }
    public withDirection(direction: string): BusinessTopoRequest {
        this['direction'] = direction;
        return this;
    }
    public withEndTime(endTime: string): BusinessTopoRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStartTime(startTime: string): BusinessTopoRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withFilterUser(filterUser: boolean): BusinessTopoRequest {
        this['filter_user'] = filterUser;
        return this;
    }
    public set filterUser(filterUser: boolean  | undefined) {
        this['filter_user'] = filterUser;
    }
    public get filterUser(): boolean | undefined {
        return this['filter_user'];
    }
}