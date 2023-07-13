

export class NodeTypeAvailableZones {
    public code: string;
    public status: string;
    public constructor(code?: any, status?: any) { 
        this['code'] = code;
        this['status'] = status;
    }
    public withCode(code: string): NodeTypeAvailableZones {
        this['code'] = code;
        return this;
    }
    public withStatus(status: string): NodeTypeAvailableZones {
        this['status'] = status;
        return this;
    }
}