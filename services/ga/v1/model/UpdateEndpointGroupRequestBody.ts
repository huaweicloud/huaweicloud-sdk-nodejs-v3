import { UpdateEndpointGroupOption } from './UpdateEndpointGroupOption';


export class UpdateEndpointGroupRequestBody {
    private 'endpoint_group'?: UpdateEndpointGroupOption;
    public constructor(endpointGroup?: UpdateEndpointGroupOption) { 
        this['endpoint_group'] = endpointGroup;
    }
    public withEndpointGroup(endpointGroup: UpdateEndpointGroupOption): UpdateEndpointGroupRequestBody {
        this['endpoint_group'] = endpointGroup;
        return this;
    }
    public set endpointGroup(endpointGroup: UpdateEndpointGroupOption  | undefined) {
        this['endpoint_group'] = endpointGroup;
    }
    public get endpointGroup(): UpdateEndpointGroupOption | undefined {
        return this['endpoint_group'];
    }
}