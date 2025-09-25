
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCicdConfigurationCommandResponse extends SdkResponse {
    private 'cicd_command'?: string;
    public constructor() { 
        super();
    }
    public withCicdCommand(cicdCommand: string): CreateCicdConfigurationCommandResponse {
        this['cicd_command'] = cicdCommand;
        return this;
    }
    public set cicdCommand(cicdCommand: string  | undefined) {
        this['cicd_command'] = cicdCommand;
    }
    public get cicdCommand(): string | undefined {
        return this['cicd_command'];
    }
}