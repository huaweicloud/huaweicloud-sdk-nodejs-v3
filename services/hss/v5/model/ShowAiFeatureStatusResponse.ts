
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAiFeatureStatusResponse extends SdkResponse {
    private 'ai_defender'?: string;
    public agentarts?: string;
    public officeace?: string;
    public openclaw?: string;
    public constructor() { 
        super();
    }
    public withAiDefender(aiDefender: string): ShowAiFeatureStatusResponse {
        this['ai_defender'] = aiDefender;
        return this;
    }
    public set aiDefender(aiDefender: string  | undefined) {
        this['ai_defender'] = aiDefender;
    }
    public get aiDefender(): string | undefined {
        return this['ai_defender'];
    }
    public withAgentarts(agentarts: string): ShowAiFeatureStatusResponse {
        this['agentarts'] = agentarts;
        return this;
    }
    public withOfficeace(officeace: string): ShowAiFeatureStatusResponse {
        this['officeace'] = officeace;
        return this;
    }
    public withOpenclaw(openclaw: string): ShowAiFeatureStatusResponse {
        this['openclaw'] = openclaw;
        return this;
    }
}