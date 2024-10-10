import { UpgradeInstanceData } from './UpgradeInstanceData';


export class UpgradeInstanceSpecV2RequestBody {
    private 'instance_id'?: string;
    private 'upgrade_data'?: UpgradeInstanceData;
    public constructor(instanceId?: string, upgradeData?: UpgradeInstanceData) { 
        this['instance_id'] = instanceId;
        this['upgrade_data'] = upgradeData;
    }
    public withInstanceId(instanceId: string): UpgradeInstanceSpecV2RequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUpgradeData(upgradeData: UpgradeInstanceData): UpgradeInstanceSpecV2RequestBody {
        this['upgrade_data'] = upgradeData;
        return this;
    }
    public set upgradeData(upgradeData: UpgradeInstanceData  | undefined) {
        this['upgrade_data'] = upgradeData;
    }
    public get upgradeData(): UpgradeInstanceData | undefined {
        return this['upgrade_data'];
    }
}