

export class CreateClientNodeRequestDTO {
    private 'client_node_id'?: string;
    public constructor(clientNodeId?: string) { 
        this['client_node_id'] = clientNodeId;
    }
    public withClientNodeId(clientNodeId: string): CreateClientNodeRequestDTO {
        this['client_node_id'] = clientNodeId;
        return this;
    }
    public set clientNodeId(clientNodeId: string  | undefined) {
        this['client_node_id'] = clientNodeId;
    }
    public get clientNodeId(): string | undefined {
        return this['client_node_id'];
    }
}