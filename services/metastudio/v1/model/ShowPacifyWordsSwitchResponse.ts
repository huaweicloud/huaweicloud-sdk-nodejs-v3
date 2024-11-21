
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPacifyWordsSwitchResponse extends SdkResponse {
    private 'enable_pacify_words'?: boolean;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withEnablePacifyWords(enablePacifyWords: boolean): ShowPacifyWordsSwitchResponse {
        this['enable_pacify_words'] = enablePacifyWords;
        return this;
    }
    public set enablePacifyWords(enablePacifyWords: boolean  | undefined) {
        this['enable_pacify_words'] = enablePacifyWords;
    }
    public get enablePacifyWords(): boolean | undefined {
        return this['enable_pacify_words'];
    }
    public withXRequestId(xRequestId: string): ShowPacifyWordsSwitchResponse {
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