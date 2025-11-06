

export class ShowResizeFlavorsRequest {
    public clusterId?: string;
    public constructor(clusterId?: string) { 
        this['clusterId'] = clusterId;
    }
    public withClusterId(clusterId: string): ShowResizeFlavorsRequest {
        this['clusterId'] = clusterId;
        return this;
    }
}