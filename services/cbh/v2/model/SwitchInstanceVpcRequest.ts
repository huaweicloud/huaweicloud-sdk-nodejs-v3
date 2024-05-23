import { SwitchVirtualPrivateCloudRequestBody } from './SwitchVirtualPrivateCloudRequestBody';


export class SwitchInstanceVpcRequest {
    public body?: SwitchVirtualPrivateCloudRequestBody;
    public constructor() { 
    }
    public withBody(body: SwitchVirtualPrivateCloudRequestBody): SwitchInstanceVpcRequest {
        this['body'] = body;
        return this;
    }
}