import { AffinityType } from './AffinityType';
import { CustomHooks } from './CustomHooks';
import { EndpointsReq } from './EndpointsReq';
import { LeaseReq } from './LeaseReq';
import { NotebookCustomSpec } from './NotebookCustomSpec';
import { RunUserRequest } from './RunUserRequest';
import { UserVpcRequest } from './UserVpcRequest';
import { VolumeMountRequest } from './VolumeMountRequest';


export class NotebookCreateRequest {
    public description?: string;
    public endpoints?: Array<EndpointsReq>;
    public feature?: NotebookCreateRequestFeatureEnum | string;
    public flavor?: string;
    private 'custom_spec'?: NotebookCustomSpec;
    private 'image_id'?: string;
    public name?: string;
    private 'pool_id'?: string;
    public volume?: VolumeMountRequest;
    private 'workspace_id'?: string;
    public hooks?: CustomHooks;
    public lease?: LeaseReq;
    public affinity?: AffinityType;
    private 'run_user'?: RunUserRequest;
    private 'data_volumes'?: Array<VolumeMountRequest>;
    private 'user_vpc'?: UserVpcRequest;
    public duration?: number;
    public constructor(imageId?: string, name?: string, volume?: VolumeMountRequest) { 
        this['image_id'] = imageId;
        this['name'] = name;
        this['volume'] = volume;
    }
    public withDescription(description: string): NotebookCreateRequest {
        this['description'] = description;
        return this;
    }
    public withEndpoints(endpoints: Array<EndpointsReq>): NotebookCreateRequest {
        this['endpoints'] = endpoints;
        return this;
    }
    public withFeature(feature: NotebookCreateRequestFeatureEnum | string): NotebookCreateRequest {
        this['feature'] = feature;
        return this;
    }
    public withFlavor(flavor: string): NotebookCreateRequest {
        this['flavor'] = flavor;
        return this;
    }
    public withCustomSpec(customSpec: NotebookCustomSpec): NotebookCreateRequest {
        this['custom_spec'] = customSpec;
        return this;
    }
    public set customSpec(customSpec: NotebookCustomSpec  | undefined) {
        this['custom_spec'] = customSpec;
    }
    public get customSpec(): NotebookCustomSpec | undefined {
        return this['custom_spec'];
    }
    public withImageId(imageId: string): NotebookCreateRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withName(name: string): NotebookCreateRequest {
        this['name'] = name;
        return this;
    }
    public withPoolId(poolId: string): NotebookCreateRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withVolume(volume: VolumeMountRequest): NotebookCreateRequest {
        this['volume'] = volume;
        return this;
    }
    public withWorkspaceId(workspaceId: string): NotebookCreateRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withHooks(hooks: CustomHooks): NotebookCreateRequest {
        this['hooks'] = hooks;
        return this;
    }
    public withLease(lease: LeaseReq): NotebookCreateRequest {
        this['lease'] = lease;
        return this;
    }
    public withAffinity(affinity: AffinityType): NotebookCreateRequest {
        this['affinity'] = affinity;
        return this;
    }
    public withRunUser(runUser: RunUserRequest): NotebookCreateRequest {
        this['run_user'] = runUser;
        return this;
    }
    public set runUser(runUser: RunUserRequest  | undefined) {
        this['run_user'] = runUser;
    }
    public get runUser(): RunUserRequest | undefined {
        return this['run_user'];
    }
    public withDataVolumes(dataVolumes: Array<VolumeMountRequest>): NotebookCreateRequest {
        this['data_volumes'] = dataVolumes;
        return this;
    }
    public set dataVolumes(dataVolumes: Array<VolumeMountRequest>  | undefined) {
        this['data_volumes'] = dataVolumes;
    }
    public get dataVolumes(): Array<VolumeMountRequest> | undefined {
        return this['data_volumes'];
    }
    public withUserVpc(userVpc: UserVpcRequest): NotebookCreateRequest {
        this['user_vpc'] = userVpc;
        return this;
    }
    public set userVpc(userVpc: UserVpcRequest  | undefined) {
        this['user_vpc'] = userVpc;
    }
    public get userVpc(): UserVpcRequest | undefined {
        return this['user_vpc'];
    }
    public withDuration(duration: number): NotebookCreateRequest {
        this['duration'] = duration;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NotebookCreateRequestFeatureEnum {
    DEFAULT = 'DEFAULT',
    NOTEBOOK = 'NOTEBOOK'
}
