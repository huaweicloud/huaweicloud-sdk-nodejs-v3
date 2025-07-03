
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAccessPointResponse extends SdkResponse {
    public id?: number;
    private 'gmt_create'?: string;
    private 'gmt_modify'?: string;
    public region?: string;
    public accessPoint?: string;
    public token?: string;
    private 'hidden_token'?: string;
    private 'sw_business_id'?: number;
    private 'agent_download_url'?: string;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowAccessPointResponse {
        this['id'] = id;
        return this;
    }
    public withGmtCreate(gmtCreate: string): ShowAccessPointResponse {
        this['gmt_create'] = gmtCreate;
        return this;
    }
    public set gmtCreate(gmtCreate: string  | undefined) {
        this['gmt_create'] = gmtCreate;
    }
    public get gmtCreate(): string | undefined {
        return this['gmt_create'];
    }
    public withGmtModify(gmtModify: string): ShowAccessPointResponse {
        this['gmt_modify'] = gmtModify;
        return this;
    }
    public set gmtModify(gmtModify: string  | undefined) {
        this['gmt_modify'] = gmtModify;
    }
    public get gmtModify(): string | undefined {
        return this['gmt_modify'];
    }
    public withRegion(region: string): ShowAccessPointResponse {
        this['region'] = region;
        return this;
    }
    public withAccessPoint(accessPoint: string): ShowAccessPointResponse {
        this['accessPoint'] = accessPoint;
        return this;
    }
    public withToken(token: string): ShowAccessPointResponse {
        this['token'] = token;
        return this;
    }
    public withHiddenToken(hiddenToken: string): ShowAccessPointResponse {
        this['hidden_token'] = hiddenToken;
        return this;
    }
    public set hiddenToken(hiddenToken: string  | undefined) {
        this['hidden_token'] = hiddenToken;
    }
    public get hiddenToken(): string | undefined {
        return this['hidden_token'];
    }
    public withSwBusinessId(swBusinessId: number): ShowAccessPointResponse {
        this['sw_business_id'] = swBusinessId;
        return this;
    }
    public set swBusinessId(swBusinessId: number  | undefined) {
        this['sw_business_id'] = swBusinessId;
    }
    public get swBusinessId(): number | undefined {
        return this['sw_business_id'];
    }
    public withAgentDownloadUrl(agentDownloadUrl: string): ShowAccessPointResponse {
        this['agent_download_url'] = agentDownloadUrl;
        return this;
    }
    public set agentDownloadUrl(agentDownloadUrl: string  | undefined) {
        this['agent_download_url'] = agentDownloadUrl;
    }
    public get agentDownloadUrl(): string | undefined {
        return this['agent_download_url'];
    }
}