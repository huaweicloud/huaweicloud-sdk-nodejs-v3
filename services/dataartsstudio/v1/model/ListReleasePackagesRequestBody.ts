

export class ListReleasePackagesRequestBody {
    private 'key_word'?: string;
    private 'apply_user_name'?: string;
    private 'deploy_user_name'?: string;
    private 'apply_begin_time'?: number;
    private 'apply_end_time'?: number;
    private 'deploy_begin_time'?: number;
    private 'deploy_end_time'?: number;
    private 'apply_user_name_filter'?: Array<string>;
    private 'deploy_user_name_filter'?: Array<string>;
    private 'deploy_status_filter'?: Array<number>;
    private 'sorted_direction'?: string;
    private 'order_column'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withKeyWord(keyWord: string): ListReleasePackagesRequestBody {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string  | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord(): string | undefined {
        return this['key_word'];
    }
    public withApplyUserName(applyUserName: string): ListReleasePackagesRequestBody {
        this['apply_user_name'] = applyUserName;
        return this;
    }
    public set applyUserName(applyUserName: string  | undefined) {
        this['apply_user_name'] = applyUserName;
    }
    public get applyUserName(): string | undefined {
        return this['apply_user_name'];
    }
    public withDeployUserName(deployUserName: string): ListReleasePackagesRequestBody {
        this['deploy_user_name'] = deployUserName;
        return this;
    }
    public set deployUserName(deployUserName: string  | undefined) {
        this['deploy_user_name'] = deployUserName;
    }
    public get deployUserName(): string | undefined {
        return this['deploy_user_name'];
    }
    public withApplyBeginTime(applyBeginTime: number): ListReleasePackagesRequestBody {
        this['apply_begin_time'] = applyBeginTime;
        return this;
    }
    public set applyBeginTime(applyBeginTime: number  | undefined) {
        this['apply_begin_time'] = applyBeginTime;
    }
    public get applyBeginTime(): number | undefined {
        return this['apply_begin_time'];
    }
    public withApplyEndTime(applyEndTime: number): ListReleasePackagesRequestBody {
        this['apply_end_time'] = applyEndTime;
        return this;
    }
    public set applyEndTime(applyEndTime: number  | undefined) {
        this['apply_end_time'] = applyEndTime;
    }
    public get applyEndTime(): number | undefined {
        return this['apply_end_time'];
    }
    public withDeployBeginTime(deployBeginTime: number): ListReleasePackagesRequestBody {
        this['deploy_begin_time'] = deployBeginTime;
        return this;
    }
    public set deployBeginTime(deployBeginTime: number  | undefined) {
        this['deploy_begin_time'] = deployBeginTime;
    }
    public get deployBeginTime(): number | undefined {
        return this['deploy_begin_time'];
    }
    public withDeployEndTime(deployEndTime: number): ListReleasePackagesRequestBody {
        this['deploy_end_time'] = deployEndTime;
        return this;
    }
    public set deployEndTime(deployEndTime: number  | undefined) {
        this['deploy_end_time'] = deployEndTime;
    }
    public get deployEndTime(): number | undefined {
        return this['deploy_end_time'];
    }
    public withApplyUserNameFilter(applyUserNameFilter: Array<string>): ListReleasePackagesRequestBody {
        this['apply_user_name_filter'] = applyUserNameFilter;
        return this;
    }
    public set applyUserNameFilter(applyUserNameFilter: Array<string>  | undefined) {
        this['apply_user_name_filter'] = applyUserNameFilter;
    }
    public get applyUserNameFilter(): Array<string> | undefined {
        return this['apply_user_name_filter'];
    }
    public withDeployUserNameFilter(deployUserNameFilter: Array<string>): ListReleasePackagesRequestBody {
        this['deploy_user_name_filter'] = deployUserNameFilter;
        return this;
    }
    public set deployUserNameFilter(deployUserNameFilter: Array<string>  | undefined) {
        this['deploy_user_name_filter'] = deployUserNameFilter;
    }
    public get deployUserNameFilter(): Array<string> | undefined {
        return this['deploy_user_name_filter'];
    }
    public withDeployStatusFilter(deployStatusFilter: Array<number>): ListReleasePackagesRequestBody {
        this['deploy_status_filter'] = deployStatusFilter;
        return this;
    }
    public set deployStatusFilter(deployStatusFilter: Array<number>  | undefined) {
        this['deploy_status_filter'] = deployStatusFilter;
    }
    public get deployStatusFilter(): Array<number> | undefined {
        return this['deploy_status_filter'];
    }
    public withSortedDirection(sortedDirection: string): ListReleasePackagesRequestBody {
        this['sorted_direction'] = sortedDirection;
        return this;
    }
    public set sortedDirection(sortedDirection: string  | undefined) {
        this['sorted_direction'] = sortedDirection;
    }
    public get sortedDirection(): string | undefined {
        return this['sorted_direction'];
    }
    public withOrderColumn(orderColumn: string): ListReleasePackagesRequestBody {
        this['order_column'] = orderColumn;
        return this;
    }
    public set orderColumn(orderColumn: string  | undefined) {
        this['order_column'] = orderColumn;
    }
    public get orderColumn(): string | undefined {
        return this['order_column'];
    }
    public withLimit(limit: number): ListReleasePackagesRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListReleasePackagesRequestBody {
        this['offset'] = offset;
        return this;
    }
}