

export class ShowPacifyWordsTriggerTimeRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    private 'robot_id'?: string;
    public language?: ShowPacifyWordsTriggerTimeRequestLanguageEnum | string;
    public constructor(robotId?: string, language?: string) { 
        this['robot_id'] = robotId;
        this['language'] = language;
    }
    public withAuthorization(authorization: string): ShowPacifyWordsTriggerTimeRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ShowPacifyWordsTriggerTimeRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ShowPacifyWordsTriggerTimeRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ShowPacifyWordsTriggerTimeRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withRobotId(robotId: string): ShowPacifyWordsTriggerTimeRequest {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withLanguage(language: ShowPacifyWordsTriggerTimeRequestLanguageEnum | string): ShowPacifyWordsTriggerTimeRequest {
        this['language'] = language;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowPacifyWordsTriggerTimeRequestLanguageEnum {
    CN = 'CN',
    EN = 'EN'
}
