
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHotWordsSwitchResponse extends SdkResponse {
    private 'enable_hot_words'?: boolean;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withEnableHotWords(enableHotWords: boolean): ShowHotWordsSwitchResponse {
        this['enable_hot_words'] = enableHotWords;
        return this;
    }
    public set enableHotWords(enableHotWords: boolean  | undefined) {
        this['enable_hot_words'] = enableHotWords;
    }
    public get enableHotWords(): boolean | undefined {
        return this['enable_hot_words'];
    }
    public withXRequestId(xRequestId: string): ShowHotWordsSwitchResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}