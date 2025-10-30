
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAgentAddressResponse extends SdkResponse {
    private 'anp_address'?: string;
    private 'region_id'?: string;
    private 'agent_address'?: string;
    public constructor() { 
        super();
    }
    public withAnpAddress(anpAddress: string): ShowAgentAddressResponse {
        this['anp_address'] = anpAddress;
        return this;
    }
    public set anpAddress(anpAddress: string  | undefined) {
        this['anp_address'] = anpAddress;
    }
    public get anpAddress(): string | undefined {
        return this['anp_address'];
    }
    public withRegionId(regionId: string): ShowAgentAddressResponse {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withAgentAddress(agentAddress: string): ShowAgentAddressResponse {
        this['agent_address'] = agentAddress;
        return this;
    }
    public set agentAddress(agentAddress: string  | undefined) {
        this['agent_address'] = agentAddress;
    }
    public get agentAddress(): string | undefined {
        return this['agent_address'];
    }
}