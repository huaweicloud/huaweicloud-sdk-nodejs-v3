import { AlterAutoVolumeExpandConfig } from './AlterAutoVolumeExpandConfig';


export class UpdateVolumeExpansionConfigRequest {
    private 'instance_id'?: string;
    public body?: AlterAutoVolumeExpandConfig;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateVolumeExpansionConfigRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AlterAutoVolumeExpandConfig): UpdateVolumeExpansionConfigRequest {
        this['body'] = body;
        return this;
    }
}