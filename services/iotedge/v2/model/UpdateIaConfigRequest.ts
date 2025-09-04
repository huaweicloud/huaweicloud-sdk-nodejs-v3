import { UpdateIaConfigRequestDTO } from './UpdateIaConfigRequestDTO';


export class UpdateIaConfigRequest {
    private 'node_id'?: string;
    private 'ia_id'?: string;
    private 'config_id'?: string;
    public body?: UpdateIaConfigRequestDTO;
    public constructor(nodeId?: string, iaId?: string, configId?: string) { 
        this['node_id'] = nodeId;
        this['ia_id'] = iaId;
        this['config_id'] = configId;
    }
    public withNodeId(nodeId: string): UpdateIaConfigRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withIaId(iaId: string): UpdateIaConfigRequest {
        this['ia_id'] = iaId;
        return this;
    }
    public set iaId(iaId: string  | undefined) {
        this['ia_id'] = iaId;
    }
    public get iaId(): string | undefined {
        return this['ia_id'];
    }
    public withConfigId(configId: string): UpdateIaConfigRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withBody(body: UpdateIaConfigRequestDTO): UpdateIaConfigRequest {
        this['body'] = body;
        return this;
    }
}