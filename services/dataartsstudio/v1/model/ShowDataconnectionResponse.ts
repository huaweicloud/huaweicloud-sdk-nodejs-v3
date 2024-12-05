
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDataconnectionResponse extends SdkResponse {
    private 'dw_name'?: string;
    private 'dw_type'?: string;
    private 'dw_config'?: object;
    private 'agent_id'?: string;
    private 'agent_name'?: string;
    private 'env_type'?: number;
    private 'qualified_name'?: string;
    private 'dw_id'?: string;
    private 'create_user'?: string;
    private 'create_time'?: number;
    private 'dw_catagory'?: string;
    public description?: string;
    private 'update_type'?: number;
    public constructor() { 
        super();
    }
    public withDwName(dwName: string): ShowDataconnectionResponse {
        this['dw_name'] = dwName;
        return this;
    }
    public set dwName(dwName: string  | undefined) {
        this['dw_name'] = dwName;
    }
    public get dwName(): string | undefined {
        return this['dw_name'];
    }
    public withDwType(dwType: string): ShowDataconnectionResponse {
        this['dw_type'] = dwType;
        return this;
    }
    public set dwType(dwType: string  | undefined) {
        this['dw_type'] = dwType;
    }
    public get dwType(): string | undefined {
        return this['dw_type'];
    }
    public withDwConfig(dwConfig: object): ShowDataconnectionResponse {
        this['dw_config'] = dwConfig;
        return this;
    }
    public set dwConfig(dwConfig: object  | undefined) {
        this['dw_config'] = dwConfig;
    }
    public get dwConfig(): object | undefined {
        return this['dw_config'];
    }
    public withAgentId(agentId: string): ShowDataconnectionResponse {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withAgentName(agentName: string): ShowDataconnectionResponse {
        this['agent_name'] = agentName;
        return this;
    }
    public set agentName(agentName: string  | undefined) {
        this['agent_name'] = agentName;
    }
    public get agentName(): string | undefined {
        return this['agent_name'];
    }
    public withEnvType(envType: number): ShowDataconnectionResponse {
        this['env_type'] = envType;
        return this;
    }
    public set envType(envType: number  | undefined) {
        this['env_type'] = envType;
    }
    public get envType(): number | undefined {
        return this['env_type'];
    }
    public withQualifiedName(qualifiedName: string): ShowDataconnectionResponse {
        this['qualified_name'] = qualifiedName;
        return this;
    }
    public set qualifiedName(qualifiedName: string  | undefined) {
        this['qualified_name'] = qualifiedName;
    }
    public get qualifiedName(): string | undefined {
        return this['qualified_name'];
    }
    public withDwId(dwId: string): ShowDataconnectionResponse {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
    public withCreateUser(createUser: string): ShowDataconnectionResponse {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withCreateTime(createTime: number): ShowDataconnectionResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDwCatagory(dwCatagory: string): ShowDataconnectionResponse {
        this['dw_catagory'] = dwCatagory;
        return this;
    }
    public set dwCatagory(dwCatagory: string  | undefined) {
        this['dw_catagory'] = dwCatagory;
    }
    public get dwCatagory(): string | undefined {
        return this['dw_catagory'];
    }
    public withDescription(description: string): ShowDataconnectionResponse {
        this['description'] = description;
        return this;
    }
    public withUpdateType(updateType: number): ShowDataconnectionResponse {
        this['update_type'] = updateType;
        return this;
    }
    public set updateType(updateType: number  | undefined) {
        this['update_type'] = updateType;
    }
    public get updateType(): number | undefined {
        return this['update_type'];
    }
}