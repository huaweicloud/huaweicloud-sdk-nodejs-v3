

export class AdvancedMallApiDTO {
    public id?: string;
    public name?: string;
    private 'auth_type'?: AdvancedMallApiDTOAuthTypeEnum | string;
    private 'application_num'?: number;
    private 'call_num'?: number;
    private 'user_name'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'is_owner'?: boolean;
    private 'is_authorized'?: boolean;
    private 'is_update_recently'?: boolean;
    private 'is_release_recently'?: boolean;
    private 'is_hot_recently'?: boolean;
    private 'success_rate'?: string;
    private 'failure_rate'?: string;
    public constructor() { 
    }
    public withId(id: string): AdvancedMallApiDTO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AdvancedMallApiDTO {
        this['name'] = name;
        return this;
    }
    public withAuthType(authType: AdvancedMallApiDTOAuthTypeEnum | string): AdvancedMallApiDTO {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: AdvancedMallApiDTOAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): AdvancedMallApiDTOAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withApplicationNum(applicationNum: number): AdvancedMallApiDTO {
        this['application_num'] = applicationNum;
        return this;
    }
    public set applicationNum(applicationNum: number  | undefined) {
        this['application_num'] = applicationNum;
    }
    public get applicationNum(): number | undefined {
        return this['application_num'];
    }
    public withCallNum(callNum: number): AdvancedMallApiDTO {
        this['call_num'] = callNum;
        return this;
    }
    public set callNum(callNum: number  | undefined) {
        this['call_num'] = callNum;
    }
    public get callNum(): number | undefined {
        return this['call_num'];
    }
    public withUserName(userName: string): AdvancedMallApiDTO {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withCreateTime(createTime: number): AdvancedMallApiDTO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): AdvancedMallApiDTO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withIsOwner(isOwner: boolean): AdvancedMallApiDTO {
        this['is_owner'] = isOwner;
        return this;
    }
    public set isOwner(isOwner: boolean  | undefined) {
        this['is_owner'] = isOwner;
    }
    public get isOwner(): boolean | undefined {
        return this['is_owner'];
    }
    public withIsAuthorized(isAuthorized: boolean): AdvancedMallApiDTO {
        this['is_authorized'] = isAuthorized;
        return this;
    }
    public set isAuthorized(isAuthorized: boolean  | undefined) {
        this['is_authorized'] = isAuthorized;
    }
    public get isAuthorized(): boolean | undefined {
        return this['is_authorized'];
    }
    public withIsUpdateRecently(isUpdateRecently: boolean): AdvancedMallApiDTO {
        this['is_update_recently'] = isUpdateRecently;
        return this;
    }
    public set isUpdateRecently(isUpdateRecently: boolean  | undefined) {
        this['is_update_recently'] = isUpdateRecently;
    }
    public get isUpdateRecently(): boolean | undefined {
        return this['is_update_recently'];
    }
    public withIsReleaseRecently(isReleaseRecently: boolean): AdvancedMallApiDTO {
        this['is_release_recently'] = isReleaseRecently;
        return this;
    }
    public set isReleaseRecently(isReleaseRecently: boolean  | undefined) {
        this['is_release_recently'] = isReleaseRecently;
    }
    public get isReleaseRecently(): boolean | undefined {
        return this['is_release_recently'];
    }
    public withIsHotRecently(isHotRecently: boolean): AdvancedMallApiDTO {
        this['is_hot_recently'] = isHotRecently;
        return this;
    }
    public set isHotRecently(isHotRecently: boolean  | undefined) {
        this['is_hot_recently'] = isHotRecently;
    }
    public get isHotRecently(): boolean | undefined {
        return this['is_hot_recently'];
    }
    public withSuccessRate(successRate: string): AdvancedMallApiDTO {
        this['success_rate'] = successRate;
        return this;
    }
    public set successRate(successRate: string  | undefined) {
        this['success_rate'] = successRate;
    }
    public get successRate(): string | undefined {
        return this['success_rate'];
    }
    public withFailureRate(failureRate: string): AdvancedMallApiDTO {
        this['failure_rate'] = failureRate;
        return this;
    }
    public set failureRate(failureRate: string  | undefined) {
        this['failure_rate'] = failureRate;
    }
    public get failureRate(): string | undefined {
        return this['failure_rate'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AdvancedMallApiDTOAuthTypeEnum {
    APP = 'APP',
    IAM = 'IAM',
    NONE = 'NONE'
}
