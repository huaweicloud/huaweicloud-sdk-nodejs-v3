

export class DeleteCustomIngressPortRequest {
    private 'instance_id'?: string;
    private 'ingress_port_id'?: string;
    public constructor(instanceId?: string, ingressPortId?: string) { 
        this['instance_id'] = instanceId;
        this['ingress_port_id'] = ingressPortId;
    }
    public withInstanceId(instanceId: string): DeleteCustomIngressPortRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withIngressPortId(ingressPortId: string): DeleteCustomIngressPortRequest {
        this['ingress_port_id'] = ingressPortId;
        return this;
    }
    public set ingressPortId(ingressPortId: string  | undefined) {
        this['ingress_port_id'] = ingressPortId;
    }
    public get ingressPortId(): string | undefined {
        return this['ingress_port_id'];
    }
}