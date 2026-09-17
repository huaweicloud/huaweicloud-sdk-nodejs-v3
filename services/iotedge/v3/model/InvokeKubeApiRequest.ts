

export class InvokeKubeApiRequest {
    private 'cluster_id'?: string;
    private 'X-Forward-Target'?: string;
    private 'X-Forward-Headers'?: string;
    public constructor(clusterId?: string, xForwardTarget?: string, xForwardHeaders?: string) { 
        this['cluster_id'] = clusterId;
        this['X-Forward-Target'] = xForwardTarget;
        this['X-Forward-Headers'] = xForwardHeaders;
    }
    public withClusterId(clusterId: string): InvokeKubeApiRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withXForwardTarget(xForwardTarget: string): InvokeKubeApiRequest {
        this['X-Forward-Target'] = xForwardTarget;
        return this;
    }
    public set xForwardTarget(xForwardTarget: string  | undefined) {
        this['X-Forward-Target'] = xForwardTarget;
    }
    public get xForwardTarget(): string | undefined {
        return this['X-Forward-Target'];
    }
    public withXForwardHeaders(xForwardHeaders: string): InvokeKubeApiRequest {
        this['X-Forward-Headers'] = xForwardHeaders;
        return this;
    }
    public set xForwardHeaders(xForwardHeaders: string  | undefined) {
        this['X-Forward-Headers'] = xForwardHeaders;
    }
    public get xForwardHeaders(): string | undefined {
        return this['X-Forward-Headers'];
    }
}