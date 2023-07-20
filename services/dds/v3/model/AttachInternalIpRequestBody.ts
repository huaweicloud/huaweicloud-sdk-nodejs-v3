

export class AttachInternalIpRequestBody {
    private 'node_id'?: string;
    private 'new_ip'?: string;
    public constructor(nodeId?: string, newIp?: string) { 
        this['node_id'] = nodeId;
        this['new_ip'] = newIp;
    }
    public withNodeId(nodeId: string): AttachInternalIpRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNewIp(newIp: string): AttachInternalIpRequestBody {
        this['new_ip'] = newIp;
        return this;
    }
    public set newIp(newIp: string  | undefined) {
        this['new_ip'] = newIp;
    }
    public get newIp(): string | undefined {
        return this['new_ip'];
    }
}