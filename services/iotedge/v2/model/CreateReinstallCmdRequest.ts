import { CreateReinstallCmdRequestBody } from './CreateReinstallCmdRequestBody';


export class CreateReinstallCmdRequest {
    private 'edge_node_id'?: string;
    private 'enable_tpm'?: boolean;
    public body?: CreateReinstallCmdRequestBody;
    public constructor(edgeNodeId?: string) { 
        this['edge_node_id'] = edgeNodeId;
    }
    public withEdgeNodeId(edgeNodeId: string): CreateReinstallCmdRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withEnableTpm(enableTpm: boolean): CreateReinstallCmdRequest {
        this['enable_tpm'] = enableTpm;
        return this;
    }
    public set enableTpm(enableTpm: boolean  | undefined) {
        this['enable_tpm'] = enableTpm;
    }
    public get enableTpm(): boolean | undefined {
        return this['enable_tpm'];
    }
    public withBody(body: CreateReinstallCmdRequestBody): CreateReinstallCmdRequest {
        this['body'] = body;
        return this;
    }
}