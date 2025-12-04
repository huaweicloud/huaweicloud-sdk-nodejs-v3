import { BareMetalModifyPortRequestBody } from './BareMetalModifyPortRequestBody';


export class ModifyVmNicRequest {
    private 'nic_id'?: string;
    public body?: BareMetalModifyPortRequestBody;
    public constructor(nicId?: string) { 
        this['nic_id'] = nicId;
    }
    public withNicId(nicId: string): ModifyVmNicRequest {
        this['nic_id'] = nicId;
        return this;
    }
    public set nicId(nicId: string  | undefined) {
        this['nic_id'] = nicId;
    }
    public get nicId(): string | undefined {
        return this['nic_id'];
    }
    public withBody(body: BareMetalModifyPortRequestBody): ModifyVmNicRequest {
        this['body'] = body;
        return this;
    }
}