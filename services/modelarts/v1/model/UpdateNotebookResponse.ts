import { AffinityType } from './AffinityType';
import { EndpointsRes } from './EndpointsRes';
import { Image } from './Image';
import { JobProgress } from './JobProgress';
import { Lease } from './Lease';
import { NotebookCustomSpecRep } from './NotebookCustomSpecRep';
import { Pool } from './Pool';
import { RunUserInfo } from './RunUserInfo';
import { TmsTagResponse } from './TmsTagResponse';
import { UserResponse } from './UserResponse';
import { UserVpcResponse } from './UserVpcResponse';
import { VolumeRes } from './VolumeRes';
import { VolumeResponse } from './VolumeResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateNotebookResponse extends SdkResponse {
    private 'action_progress'?: Array<JobProgress>;
    public description?: string;
    public endpoints?: Array<EndpointsRes>;
    private 'fail_reason'?: string;
    public flavor?: string;
    private 'custom_spec'?: NotebookCustomSpecRep;
    public id?: string;
    public image?: Image;
    public lease?: Lease;
    public name?: string;
    public pool?: Pool;
    public status?: UpdateNotebookResponseStatusEnum | string;
    public token?: string;
    public url?: string;
    public volume?: VolumeRes;
    private 'workspace_id'?: string;
    public feature?: string;
    private 'billing_items'?: Array<UpdateNotebookResponseBillingItemsEnum> | Array<string>;
    public user?: UserResponse;
    public affinity?: AffinityType;
    private 'run_user'?: RunUserInfo;
    private 'data_volumes'?: Array<VolumeResponse>;
    public ip?: string;
    private 'user_vpc'?: UserVpcResponse;
    private 'user_id'?: string;
    private 'is_need_credentials'?: boolean;
    private 'jupyter_version'?: string;
    public tags?: Array<TmsTagResponse>;
    public constructor() { 
        super();
    }
    public withActionProgress(actionProgress: Array<JobProgress>): UpdateNotebookResponse {
        this['action_progress'] = actionProgress;
        return this;
    }
    public set actionProgress(actionProgress: Array<JobProgress>  | undefined) {
        this['action_progress'] = actionProgress;
    }
    public get actionProgress(): Array<JobProgress> | undefined {
        return this['action_progress'];
    }
    public withDescription(description: string): UpdateNotebookResponse {
        this['description'] = description;
        return this;
    }
    public withEndpoints(endpoints: Array<EndpointsRes>): UpdateNotebookResponse {
        this['endpoints'] = endpoints;
        return this;
    }
    public withFailReason(failReason: string): UpdateNotebookResponse {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withFlavor(flavor: string): UpdateNotebookResponse {
        this['flavor'] = flavor;
        return this;
    }
    public withCustomSpec(customSpec: NotebookCustomSpecRep): UpdateNotebookResponse {
        this['custom_spec'] = customSpec;
        return this;
    }
    public set customSpec(customSpec: NotebookCustomSpecRep  | undefined) {
        this['custom_spec'] = customSpec;
    }
    public get customSpec(): NotebookCustomSpecRep | undefined {
        return this['custom_spec'];
    }
    public withId(id: string): UpdateNotebookResponse {
        this['id'] = id;
        return this;
    }
    public withImage(image: Image): UpdateNotebookResponse {
        this['image'] = image;
        return this;
    }
    public withLease(lease: Lease): UpdateNotebookResponse {
        this['lease'] = lease;
        return this;
    }
    public withName(name: string): UpdateNotebookResponse {
        this['name'] = name;
        return this;
    }
    public withPool(pool: Pool): UpdateNotebookResponse {
        this['pool'] = pool;
        return this;
    }
    public withStatus(status: UpdateNotebookResponseStatusEnum | string): UpdateNotebookResponse {
        this['status'] = status;
        return this;
    }
    public withToken(token: string): UpdateNotebookResponse {
        this['token'] = token;
        return this;
    }
    public withUrl(url: string): UpdateNotebookResponse {
        this['url'] = url;
        return this;
    }
    public withVolume(volume: VolumeRes): UpdateNotebookResponse {
        this['volume'] = volume;
        return this;
    }
    public withWorkspaceId(workspaceId: string): UpdateNotebookResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withFeature(feature: string): UpdateNotebookResponse {
        this['feature'] = feature;
        return this;
    }
    public withBillingItems(billingItems: Array<UpdateNotebookResponseBillingItemsEnum> | Array<string>): UpdateNotebookResponse {
        this['billing_items'] = billingItems;
        return this;
    }
    public set billingItems(billingItems: Array<UpdateNotebookResponseBillingItemsEnum> | Array<string>  | undefined) {
        this['billing_items'] = billingItems;
    }
    public get billingItems(): Array<UpdateNotebookResponseBillingItemsEnum> | Array<string> | undefined {
        return this['billing_items'];
    }
    public withUser(user: UserResponse): UpdateNotebookResponse {
        this['user'] = user;
        return this;
    }
    public withAffinity(affinity: AffinityType): UpdateNotebookResponse {
        this['affinity'] = affinity;
        return this;
    }
    public withRunUser(runUser: RunUserInfo): UpdateNotebookResponse {
        this['run_user'] = runUser;
        return this;
    }
    public set runUser(runUser: RunUserInfo  | undefined) {
        this['run_user'] = runUser;
    }
    public get runUser(): RunUserInfo | undefined {
        return this['run_user'];
    }
    public withDataVolumes(dataVolumes: Array<VolumeResponse>): UpdateNotebookResponse {
        this['data_volumes'] = dataVolumes;
        return this;
    }
    public set dataVolumes(dataVolumes: Array<VolumeResponse>  | undefined) {
        this['data_volumes'] = dataVolumes;
    }
    public get dataVolumes(): Array<VolumeResponse> | undefined {
        return this['data_volumes'];
    }
    public withIp(ip: string): UpdateNotebookResponse {
        this['ip'] = ip;
        return this;
    }
    public withUserVpc(userVpc: UserVpcResponse): UpdateNotebookResponse {
        this['user_vpc'] = userVpc;
        return this;
    }
    public set userVpc(userVpc: UserVpcResponse  | undefined) {
        this['user_vpc'] = userVpc;
    }
    public get userVpc(): UserVpcResponse | undefined {
        return this['user_vpc'];
    }
    public withUserId(userId: string): UpdateNotebookResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withIsNeedCredentials(isNeedCredentials: boolean): UpdateNotebookResponse {
        this['is_need_credentials'] = isNeedCredentials;
        return this;
    }
    public set isNeedCredentials(isNeedCredentials: boolean  | undefined) {
        this['is_need_credentials'] = isNeedCredentials;
    }
    public get isNeedCredentials(): boolean | undefined {
        return this['is_need_credentials'];
    }
    public withJupyterVersion(jupyterVersion: string): UpdateNotebookResponse {
        this['jupyter_version'] = jupyterVersion;
        return this;
    }
    public set jupyterVersion(jupyterVersion: string  | undefined) {
        this['jupyter_version'] = jupyterVersion;
    }
    public get jupyterVersion(): string | undefined {
        return this['jupyter_version'];
    }
    public withTags(tags: Array<TmsTagResponse>): UpdateNotebookResponse {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateNotebookResponseStatusEnum {
    CREATE_FAILED = 'CREATE_FAILED',
    CREATING = 'CREATING',
    DELETED = 'DELETED',
    DELETE_FAILED = 'DELETE_FAILED',
    DELETING = 'DELETING',
    ERROR = 'ERROR',
    FROZEN = 'FROZEN',
    INIT = 'INIT',
    RUNNING = 'RUNNING',
    SNAPSHOTTING = 'SNAPSHOTTING',
    STARTING = 'STARTING',
    START_FAILED = 'START_FAILED',
    STOPPED = 'STOPPED',
    STOPPING = 'STOPPING'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateNotebookResponseBillingItemsEnum {
    STORAGE = 'STORAGE',
    COMPUTE = 'COMPUTE',
    ALL = 'ALL'
}
