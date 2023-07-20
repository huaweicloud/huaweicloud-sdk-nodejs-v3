import { CreateEndpointGroupOption } from './CreateEndpointGroupOption';


export class CreateEndpointGroupRequestBody {
    private 'endpoint_group'?: CreateEndpointGroupOption;
    public constructor(endpointGroup?: CreateEndpointGroupOption) { 
        this['endpoint_group'] = endpointGroup;
    }
    public withEndpointGroup(endpointGroup: CreateEndpointGroupOption): CreateEndpointGroupRequestBody {
        this['endpoint_group'] = endpointGroup;
        return this;
    }
    public set endpointGroup(endpointGroup: CreateEndpointGroupOption  | undefined) {
        this['endpoint_group'] = endpointGroup;
    }
    public get endpointGroup(): CreateEndpointGroupOption | undefined {
        return this['endpoint_group'];
    }
}