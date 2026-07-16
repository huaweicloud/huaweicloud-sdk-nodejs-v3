import { FrozenInfo } from './FrozenInfo';


export class InferDeploymentItemResponseData {
    public id?: string;
    public name?: string;
    private 'infer_name'?: string;
    private 'service_group_name'?: string;
    public status?: string;
    private 'lts_state'?: string;
    private 'mirror_traffic_enable'?: boolean;
    private 'mirror_traffic_weight'?: string;
    public weight?: number;
    private 'traffic_ratio'?: string;
    private 'pool_id'?: string;
    public version?: string;
    private 'deploy_type'?: string;
    private 'create_at'?: number;
    private 'update_at'?: number;
    private 'frozen_infos'?: Array<FrozenInfo>;
    public constructor() { 
    }
    public withId(id: string): InferDeploymentItemResponseData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): InferDeploymentItemResponseData {
        this['name'] = name;
        return this;
    }
    public withInferName(inferName: string): InferDeploymentItemResponseData {
        this['infer_name'] = inferName;
        return this;
    }
    public set inferName(inferName: string  | undefined) {
        this['infer_name'] = inferName;
    }
    public get inferName(): string | undefined {
        return this['infer_name'];
    }
    public withServiceGroupName(serviceGroupName: string): InferDeploymentItemResponseData {
        this['service_group_name'] = serviceGroupName;
        return this;
    }
    public set serviceGroupName(serviceGroupName: string  | undefined) {
        this['service_group_name'] = serviceGroupName;
    }
    public get serviceGroupName(): string | undefined {
        return this['service_group_name'];
    }
    public withStatus(status: string): InferDeploymentItemResponseData {
        this['status'] = status;
        return this;
    }
    public withLtsState(ltsState: string): InferDeploymentItemResponseData {
        this['lts_state'] = ltsState;
        return this;
    }
    public set ltsState(ltsState: string  | undefined) {
        this['lts_state'] = ltsState;
    }
    public get ltsState(): string | undefined {
        return this['lts_state'];
    }
    public withMirrorTrafficEnable(mirrorTrafficEnable: boolean): InferDeploymentItemResponseData {
        this['mirror_traffic_enable'] = mirrorTrafficEnable;
        return this;
    }
    public set mirrorTrafficEnable(mirrorTrafficEnable: boolean  | undefined) {
        this['mirror_traffic_enable'] = mirrorTrafficEnable;
    }
    public get mirrorTrafficEnable(): boolean | undefined {
        return this['mirror_traffic_enable'];
    }
    public withMirrorTrafficWeight(mirrorTrafficWeight: string): InferDeploymentItemResponseData {
        this['mirror_traffic_weight'] = mirrorTrafficWeight;
        return this;
    }
    public set mirrorTrafficWeight(mirrorTrafficWeight: string  | undefined) {
        this['mirror_traffic_weight'] = mirrorTrafficWeight;
    }
    public get mirrorTrafficWeight(): string | undefined {
        return this['mirror_traffic_weight'];
    }
    public withWeight(weight: number): InferDeploymentItemResponseData {
        this['weight'] = weight;
        return this;
    }
    public withTrafficRatio(trafficRatio: string): InferDeploymentItemResponseData {
        this['traffic_ratio'] = trafficRatio;
        return this;
    }
    public set trafficRatio(trafficRatio: string  | undefined) {
        this['traffic_ratio'] = trafficRatio;
    }
    public get trafficRatio(): string | undefined {
        return this['traffic_ratio'];
    }
    public withPoolId(poolId: string): InferDeploymentItemResponseData {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withVersion(version: string): InferDeploymentItemResponseData {
        this['version'] = version;
        return this;
    }
    public withDeployType(deployType: string): InferDeploymentItemResponseData {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): string | undefined {
        return this['deploy_type'];
    }
    public withCreateAt(createAt: number): InferDeploymentItemResponseData {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: number): InferDeploymentItemResponseData {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withFrozenInfos(frozenInfos: Array<FrozenInfo>): InferDeploymentItemResponseData {
        this['frozen_infos'] = frozenInfos;
        return this;
    }
    public set frozenInfos(frozenInfos: Array<FrozenInfo>  | undefined) {
        this['frozen_infos'] = frozenInfos;
    }
    public get frozenInfos(): Array<FrozenInfo> | undefined {
        return this['frozen_infos'];
    }
}