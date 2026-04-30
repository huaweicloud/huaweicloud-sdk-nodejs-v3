import { SwitchTokenResponseToken } from './SwitchTokenResponseToken';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchCpcsTokenResponse extends SdkResponse {
    public token?: SwitchTokenResponseToken;
    private 'X-CPCS-Token'?: string;
    public constructor() { 
        super();
    }
    public withToken(token: SwitchTokenResponseToken): SwitchCpcsTokenResponse {
        this['token'] = token;
        return this;
    }
    public withXCPCSToken(xCPCSToken: string): SwitchCpcsTokenResponse {
        this['X-CPCS-Token'] = xCPCSToken;
        return this;
    }
    public set xCPCSToken(xCPCSToken: string  | undefined) {
        this['X-CPCS-Token'] = xCPCSToken;
    }
    public get xCPCSToken(): string | undefined {
        return this['X-CPCS-Token'];
    }
}