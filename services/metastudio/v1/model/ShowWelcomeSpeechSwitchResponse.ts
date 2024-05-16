
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWelcomeSpeechSwitchResponse extends SdkResponse {
    private 'enable_welcome_speech'?: boolean;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withEnableWelcomeSpeech(enableWelcomeSpeech: boolean): ShowWelcomeSpeechSwitchResponse {
        this['enable_welcome_speech'] = enableWelcomeSpeech;
        return this;
    }
    public set enableWelcomeSpeech(enableWelcomeSpeech: boolean  | undefined) {
        this['enable_welcome_speech'] = enableWelcomeSpeech;
    }
    public get enableWelcomeSpeech(): boolean | undefined {
        return this['enable_welcome_speech'];
    }
    public withXRequestId(xRequestId: string): ShowWelcomeSpeechSwitchResponse {
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