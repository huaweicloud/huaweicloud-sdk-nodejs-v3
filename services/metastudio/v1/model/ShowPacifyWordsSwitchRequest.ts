

export class ShowPacifyWordsSwitchRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    private 'robot_id'?: string;
    public language?: ShowPacifyWordsSwitchRequestLanguageEnum | string;
    public constructor(robotId?: string, language?: string) { 
        this['robot_id'] = robotId;
        this['language'] = language;
    }
    public withAuthorization(authorization: string): ShowPacifyWordsSwitchRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ShowPacifyWordsSwitchRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ShowPacifyWordsSwitchRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ShowPacifyWordsSwitchRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withRobotId(robotId: string): ShowPacifyWordsSwitchRequest {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withLanguage(language: ShowPacifyWordsSwitchRequestLanguageEnum | string): ShowPacifyWordsSwitchRequest {
        this['language'] = language;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowPacifyWordsSwitchRequestLanguageEnum {
    CN = 'CN',
    EN = 'EN',
    ESP = 'ESP',
    POR = 'por',
    ARABIC = 'Arabic',
    THAI = 'Thai'
}
