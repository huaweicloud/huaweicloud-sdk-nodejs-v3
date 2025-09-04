import { AuthorizeNa2NodesRequestDTO } from './AuthorizeNa2NodesRequestDTO';


export class BatchAssociateNaToNodesRequest {
    private 'na_id'?: string;
    public action?: string;
    public body?: AuthorizeNa2NodesRequestDTO;
    public constructor(naId?: string, action?: string) { 
        this['na_id'] = naId;
        this['action'] = action;
    }
    public withNaId(naId: string): BatchAssociateNaToNodesRequest {
        this['na_id'] = naId;
        return this;
    }
    public set naId(naId: string  | undefined) {
        this['na_id'] = naId;
    }
    public get naId(): string | undefined {
        return this['na_id'];
    }
    public withAction(action: string): BatchAssociateNaToNodesRequest {
        this['action'] = action;
        return this;
    }
    public withBody(body: AuthorizeNa2NodesRequestDTO): BatchAssociateNaToNodesRequest {
        this['body'] = body;
        return this;
    }
}