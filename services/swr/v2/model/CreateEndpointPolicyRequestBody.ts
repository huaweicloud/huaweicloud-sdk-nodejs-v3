

export class CreateEndpointPolicyRequestBody {
    public enable?: boolean;
    public constructor(enable?: boolean) { 
        this['enable'] = enable;
    }
    public withEnable(enable: boolean): CreateEndpointPolicyRequestBody {
        this['enable'] = enable;
        return this;
    }
}