import { NodeResourceDTO } from './NodeResourceDTO';


export class NodeAllocatedResourceDTO {
    public request?: NodeResourceDTO;
    public limit?: NodeResourceDTO;
    public constructor() { 
    }
    public withRequest(request: NodeResourceDTO): NodeAllocatedResourceDTO {
        this['request'] = request;
        return this;
    }
    public withLimit(limit: NodeResourceDTO): NodeAllocatedResourceDTO {
        this['limit'] = limit;
        return this;
    }
}