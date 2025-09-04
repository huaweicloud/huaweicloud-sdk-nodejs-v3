import { CreateInstallCmdRequestDTO } from './CreateInstallCmdRequestDTO';


export class CreateInstallCmdRequest {
    private 'edge_node_id'?: string;
    public arch?: string;
    public body?: CreateInstallCmdRequestDTO;
    public constructor(edgeNodeId?: string, arch?: string) { 
        this['edge_node_id'] = edgeNodeId;
        this['arch'] = arch;
    }
    public withEdgeNodeId(edgeNodeId: string): CreateInstallCmdRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withArch(arch: string): CreateInstallCmdRequest {
        this['arch'] = arch;
        return this;
    }
    public withBody(body: CreateInstallCmdRequestDTO): CreateInstallCmdRequest {
        this['body'] = body;
        return this;
    }
}