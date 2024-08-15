import { DeployStrategyGrayReleaseRules } from './DeployStrategyGrayReleaseRules';


export class DeployStrategyGrayRelease {
    public type?: DeployStrategyGrayReleaseTypeEnum | string;
    private 'replica_surge_mode'?: DeployStrategyGrayReleaseReplicaSurgeModeEnum | string;
    private 'deployment_mode'?: DeployStrategyGrayReleaseDeploymentModeEnum | number;
    private 'first_batch_weight'?: number;
    private 'rule_match_mode'?: DeployStrategyGrayReleaseRuleMatchModeEnum | string;
    public rules?: Array<DeployStrategyGrayReleaseRules>;
    private 'first_batch_replica'?: number;
    private 'remaining_batch'?: number;
    public constructor(type?: string, replicaSurgeMode?: string, deploymentMode?: number) { 
        this['type'] = type;
        this['replica_surge_mode'] = replicaSurgeMode;
        this['deployment_mode'] = deploymentMode;
    }
    public withType(type: DeployStrategyGrayReleaseTypeEnum | string): DeployStrategyGrayRelease {
        this['type'] = type;
        return this;
    }
    public withReplicaSurgeMode(replicaSurgeMode: DeployStrategyGrayReleaseReplicaSurgeModeEnum | string): DeployStrategyGrayRelease {
        this['replica_surge_mode'] = replicaSurgeMode;
        return this;
    }
    public set replicaSurgeMode(replicaSurgeMode: DeployStrategyGrayReleaseReplicaSurgeModeEnum | string  | undefined) {
        this['replica_surge_mode'] = replicaSurgeMode;
    }
    public get replicaSurgeMode(): DeployStrategyGrayReleaseReplicaSurgeModeEnum | string | undefined {
        return this['replica_surge_mode'];
    }
    public withDeploymentMode(deploymentMode: DeployStrategyGrayReleaseDeploymentModeEnum | number): DeployStrategyGrayRelease {
        this['deployment_mode'] = deploymentMode;
        return this;
    }
    public set deploymentMode(deploymentMode: DeployStrategyGrayReleaseDeploymentModeEnum | number  | undefined) {
        this['deployment_mode'] = deploymentMode;
    }
    public get deploymentMode(): DeployStrategyGrayReleaseDeploymentModeEnum | number | undefined {
        return this['deployment_mode'];
    }
    public withFirstBatchWeight(firstBatchWeight: number): DeployStrategyGrayRelease {
        this['first_batch_weight'] = firstBatchWeight;
        return this;
    }
    public set firstBatchWeight(firstBatchWeight: number  | undefined) {
        this['first_batch_weight'] = firstBatchWeight;
    }
    public get firstBatchWeight(): number | undefined {
        return this['first_batch_weight'];
    }
    public withRuleMatchMode(ruleMatchMode: DeployStrategyGrayReleaseRuleMatchModeEnum | string): DeployStrategyGrayRelease {
        this['rule_match_mode'] = ruleMatchMode;
        return this;
    }
    public set ruleMatchMode(ruleMatchMode: DeployStrategyGrayReleaseRuleMatchModeEnum | string  | undefined) {
        this['rule_match_mode'] = ruleMatchMode;
    }
    public get ruleMatchMode(): DeployStrategyGrayReleaseRuleMatchModeEnum | string | undefined {
        return this['rule_match_mode'];
    }
    public withRules(rules: Array<DeployStrategyGrayReleaseRules>): DeployStrategyGrayRelease {
        this['rules'] = rules;
        return this;
    }
    public withFirstBatchReplica(firstBatchReplica: number): DeployStrategyGrayRelease {
        this['first_batch_replica'] = firstBatchReplica;
        return this;
    }
    public set firstBatchReplica(firstBatchReplica: number  | undefined) {
        this['first_batch_replica'] = firstBatchReplica;
    }
    public get firstBatchReplica(): number | undefined {
        return this['first_batch_replica'];
    }
    public withRemainingBatch(remainingBatch: number): DeployStrategyGrayRelease {
        this['remaining_batch'] = remainingBatch;
        return this;
    }
    public set remainingBatch(remainingBatch: number  | undefined) {
        this['remaining_batch'] = remainingBatch;
    }
    public get remainingBatch(): number | undefined {
        return this['remaining_batch'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeployStrategyGrayReleaseTypeEnum {
    WEIGHT = 'WEIGHT',
    CONTENT = 'CONTENT'
}
/**
    * @export
    * @enum {string}
    */
export enum DeployStrategyGrayReleaseReplicaSurgeModeEnum {
    MIRROR = 'MIRROR',
    EXTRA = 'EXTRA',
    NOSURGE = 'NOSURGE'
}
/**
    * @export
    * @enum {string}
    */
export enum DeployStrategyGrayReleaseDeploymentModeEnum {
    NUMBER_1 = 1,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
/**
    * @export
    * @enum {string}
    */
export enum DeployStrategyGrayReleaseRuleMatchModeEnum {
    ALL = 'all',
    ANY = 'any'
}
