

export class KeystoneShowEndpointRequest {
    private 'endpoint_id': string | undefined;
    public constructor(endpointId?: any) { 
        this['endpoint_id'] = endpointId;
    }
    public withEndpointId(endpointId: string): KeystoneShowEndpointRequest {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId() {
        return this['endpoint_id'];
    }
}