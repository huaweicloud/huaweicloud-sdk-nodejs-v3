
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDecoyPortAutoBindResponse extends SdkResponse {
    private 'auto_bind'?: boolean;
    private 'windows_policy'?: string;
    private 'linux_policy'?: string;
    public constructor() { 
        super();
    }
    public withAutoBind(autoBind: boolean): ShowDecoyPortAutoBindResponse {
        this['auto_bind'] = autoBind;
        return this;
    }
    public set autoBind(autoBind: boolean  | undefined) {
        this['auto_bind'] = autoBind;
    }
    public get autoBind(): boolean | undefined {
        return this['auto_bind'];
    }
    public withWindowsPolicy(windowsPolicy: string): ShowDecoyPortAutoBindResponse {
        this['windows_policy'] = windowsPolicy;
        return this;
    }
    public set windowsPolicy(windowsPolicy: string  | undefined) {
        this['windows_policy'] = windowsPolicy;
    }
    public get windowsPolicy(): string | undefined {
        return this['windows_policy'];
    }
    public withLinuxPolicy(linuxPolicy: string): ShowDecoyPortAutoBindResponse {
        this['linux_policy'] = linuxPolicy;
        return this;
    }
    public set linuxPolicy(linuxPolicy: string  | undefined) {
        this['linux_policy'] = linuxPolicy;
    }
    public get linuxPolicy(): string | undefined {
        return this['linux_policy'];
    }
}