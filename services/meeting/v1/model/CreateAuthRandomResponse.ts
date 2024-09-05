
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAuthRandomResponse extends SdkResponse {
    public random?: string;
    public subject?: string;
    private 'conf_mode'?: CreateAuthRandomResponseConfModeEnum | string;
    public webinar?: boolean;
    private 'need_password'?: boolean;
    private 'support_applets'?: boolean;
    public constructor() { 
        super();
    }
    public withRandom(random: string): CreateAuthRandomResponse {
        this['random'] = random;
        return this;
    }
    public withSubject(subject: string): CreateAuthRandomResponse {
        this['subject'] = subject;
        return this;
    }
    public withConfMode(confMode: CreateAuthRandomResponseConfModeEnum | string): CreateAuthRandomResponse {
        this['conf_mode'] = confMode;
        return this;
    }
    public set confMode(confMode: CreateAuthRandomResponseConfModeEnum | string  | undefined) {
        this['conf_mode'] = confMode;
    }
    public get confMode(): CreateAuthRandomResponseConfModeEnum | string | undefined {
        return this['conf_mode'];
    }
    public withWebinar(webinar: boolean): CreateAuthRandomResponse {
        this['webinar'] = webinar;
        return this;
    }
    public withNeedPassword(needPassword: boolean): CreateAuthRandomResponse {
        this['need_password'] = needPassword;
        return this;
    }
    public set needPassword(needPassword: boolean  | undefined) {
        this['need_password'] = needPassword;
    }
    public get needPassword(): boolean | undefined {
        return this['need_password'];
    }
    public withSupportApplets(supportApplets: boolean): CreateAuthRandomResponse {
        this['support_applets'] = supportApplets;
        return this;
    }
    public set supportApplets(supportApplets: boolean  | undefined) {
        this['support_applets'] = supportApplets;
    }
    public get supportApplets(): boolean | undefined {
        return this['support_applets'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAuthRandomResponseConfModeEnum {
    COMMON = 'COMMON',
    RTC = 'RTC'
}
