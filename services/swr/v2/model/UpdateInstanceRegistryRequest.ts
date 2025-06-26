import { UpdateRegistryRequestBody } from './UpdateRegistryRequestBody';


export class UpdateInstanceRegistryRequest {
    private 'instance_id'?: string;
    private 'registry_id'?: number;
    public body?: UpdateRegistryRequestBody;
    public constructor(instanceId?: string, registryId?: number) { 
        this['instance_id'] = instanceId;
        this['registry_id'] = registryId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceRegistryRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withRegistryId(registryId: number): UpdateInstanceRegistryRequest {
        this['registry_id'] = registryId;
        return this;
    }
    public set registryId(registryId: number  | undefined) {
        this['registry_id'] = registryId;
    }
    public get registryId(): number | undefined {
        return this['registry_id'];
    }
    public withBody(body: UpdateRegistryRequestBody): UpdateInstanceRegistryRequest {
        this['body'] = body;
        return this;
    }
}