

export class ListHotWordsRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    public offset?: number;
    public limit?: number;
    private 'robot_id'?: string;
    public region?: number;
    public language?: ListHotWordsRequestLanguageEnum | string;
    public constructor(robotId?: string) { 
        this['robot_id'] = robotId;
    }
    public withAuthorization(authorization: string): ListHotWordsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListHotWordsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListHotWordsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ListHotWordsRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withOffset(offset: number): ListHotWordsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHotWordsRequest {
        this['limit'] = limit;
        return this;
    }
    public withRobotId(robotId: string): ListHotWordsRequest {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withRegion(region: number): ListHotWordsRequest {
        this['region'] = region;
        return this;
    }
    public withLanguage(language: ListHotWordsRequestLanguageEnum | string): ListHotWordsRequest {
        this['language'] = language;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListHotWordsRequestLanguageEnum {
    ZH_CN = 'zh_CN',
    EN_US = 'en_US',
    CN = 'CN',
    EN = 'EN'
}
