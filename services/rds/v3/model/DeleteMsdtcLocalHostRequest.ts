import { DeleteMsdtcLocalHostRequestBody } from './DeleteMsdtcLocalHostRequestBody';


export class DeleteMsdtcLocalHostRequest {
    private 'instance_id'?: string;
    public body?: DeleteMsdtcLocalHostRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteMsdtcLocalHostRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeleteMsdtcLocalHostRequestBody): DeleteMsdtcLocalHostRequest {
        this['body'] = body;
        return this;
    }
}