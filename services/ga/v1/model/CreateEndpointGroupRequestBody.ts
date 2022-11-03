import { CreateEndpointGroupOption } from './CreateEndpointGroupOption';


export class CreateEndpointGroupRequestBody {
    private 'endpoint_group': CreateEndpointGroupOption | undefined;
    public constructor(endpointGroup?: any) { 
        this['endpoint_group'] = endpointGroup;
    }
    public withEndpointGroup(endpointGroup: CreateEndpointGroupOption): CreateEndpointGroupRequestBody {
        this['endpoint_group'] = endpointGroup;
        return this;
    }
    public set endpointGroup(endpointGroup: CreateEndpointGroupOption | undefined) {
        this['endpoint_group'] = endpointGroup;
    }
    public get endpointGroup() {
        return this['endpoint_group'];
    }
}