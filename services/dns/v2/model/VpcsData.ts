

export class VpcsData {
    public id?: string;
    private 'inbound_endpoint_count'?: number;
    private 'outbound_endpoint_count'?: number;
    public constructor() { 
    }
    public withId(id: string): VpcsData {
        this['id'] = id;
        return this;
    }
    public withInboundEndpointCount(inboundEndpointCount: number): VpcsData {
        this['inbound_endpoint_count'] = inboundEndpointCount;
        return this;
    }
    public set inboundEndpointCount(inboundEndpointCount: number  | undefined) {
        this['inbound_endpoint_count'] = inboundEndpointCount;
    }
    public get inboundEndpointCount(): number | undefined {
        return this['inbound_endpoint_count'];
    }
    public withOutboundEndpointCount(outboundEndpointCount: number): VpcsData {
        this['outbound_endpoint_count'] = outboundEndpointCount;
        return this;
    }
    public set outboundEndpointCount(outboundEndpointCount: number  | undefined) {
        this['outbound_endpoint_count'] = outboundEndpointCount;
    }
    public get outboundEndpointCount(): number | undefined {
        return this['outbound_endpoint_count'];
    }
}