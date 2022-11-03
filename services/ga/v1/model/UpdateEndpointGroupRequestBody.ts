import { UpdateEndpointGroupOption } from './UpdateEndpointGroupOption';


export class UpdateEndpointGroupRequestBody {
    private 'endpoint_group': UpdateEndpointGroupOption | undefined;
    public constructor(endpointGroup?: any) { 
        this['endpoint_group'] = endpointGroup;
    }
    public withEndpointGroup(endpointGroup: UpdateEndpointGroupOption): UpdateEndpointGroupRequestBody {
        this['endpoint_group'] = endpointGroup;
        return this;
    }
    public set endpointGroup(endpointGroup: UpdateEndpointGroupOption | undefined) {
        this['endpoint_group'] = endpointGroup;
    }
    public get endpointGroup() {
        return this['endpoint_group'];
    }
}