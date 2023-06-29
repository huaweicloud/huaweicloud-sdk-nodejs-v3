

export class DeploymentGroupUpdateRequest {
    public name: string;
    public description?: string;
    private 'slave_cluster_id'?: string | undefined;
    private 'auto_connection_test_switch'?: DeploymentGroupUpdateRequestAutoConnectionTestSwitchEnum | undefined;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): DeploymentGroupUpdateRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): DeploymentGroupUpdateRequest {
        this['description'] = description;
        return this;
    }
    public withSlaveClusterId(slaveClusterId: string): DeploymentGroupUpdateRequest {
        this['slave_cluster_id'] = slaveClusterId;
        return this;
    }
    public set slaveClusterId(slaveClusterId: string | undefined) {
        this['slave_cluster_id'] = slaveClusterId;
    }
    public get slaveClusterId() {
        return this['slave_cluster_id'];
    }
    public withAutoConnectionTestSwitch(autoConnectionTestSwitch: DeploymentGroupUpdateRequestAutoConnectionTestSwitchEnum): DeploymentGroupUpdateRequest {
        this['auto_connection_test_switch'] = autoConnectionTestSwitch;
        return this;
    }
    public set autoConnectionTestSwitch(autoConnectionTestSwitch: DeploymentGroupUpdateRequestAutoConnectionTestSwitchEnum | undefined) {
        this['auto_connection_test_switch'] = autoConnectionTestSwitch;
    }
    public get autoConnectionTestSwitch() {
        return this['auto_connection_test_switch'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeploymentGroupUpdateRequestAutoConnectionTestSwitchEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
