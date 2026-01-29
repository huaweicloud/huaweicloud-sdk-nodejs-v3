import { ListCollectConfigResponseBodyAccounts } from './ListCollectConfigResponseBodyAccounts';
import { ListCollectConfigResponseBodyReference } from './ListCollectConfigResponseBodyReference';
import { ListCollectConfigResponseBodyTarget } from './ListCollectConfigResponseBodyTarget';


export class ListCollectConfigResponseBodyDatasets {
    private 'account_all_num'?: number;
    private 'account_successful_num'?: number;
    public accounts?: Array<ListCollectConfigResponseBodyAccounts>;
    public alert?: boolean;
    private 'all_accounts'?: boolean;
    private 'allow_alert'?: boolean;
    private 'dataspace_id'?: string;
    private 'dataspace_name'?: string;
    public enable?: string;
    private 'last_active_time'?: number;
    public limit?: string;
    private 'new_account_auto_access'?: boolean;
    private 'process_status'?: ListCollectConfigResponseBodyDatasetsProcessStatusEnum | string;
    public reference?: ListCollectConfigResponseBodyReference;
    private 'region_id'?: string;
    private 'sink_msg'?: string;
    private 'source_id'?: number;
    private 'source_name'?: string;
    public target?: ListCollectConfigResponseBodyTarget;
    public type?: string;
    private 'workspace_id'?: string;
    public constructor() { 
    }
    public withAccountAllNum(accountAllNum: number): ListCollectConfigResponseBodyDatasets {
        this['account_all_num'] = accountAllNum;
        return this;
    }
    public set accountAllNum(accountAllNum: number  | undefined) {
        this['account_all_num'] = accountAllNum;
    }
    public get accountAllNum(): number | undefined {
        return this['account_all_num'];
    }
    public withAccountSuccessfulNum(accountSuccessfulNum: number): ListCollectConfigResponseBodyDatasets {
        this['account_successful_num'] = accountSuccessfulNum;
        return this;
    }
    public set accountSuccessfulNum(accountSuccessfulNum: number  | undefined) {
        this['account_successful_num'] = accountSuccessfulNum;
    }
    public get accountSuccessfulNum(): number | undefined {
        return this['account_successful_num'];
    }
    public withAccounts(accounts: Array<ListCollectConfigResponseBodyAccounts>): ListCollectConfigResponseBodyDatasets {
        this['accounts'] = accounts;
        return this;
    }
    public withAlert(alert: boolean): ListCollectConfigResponseBodyDatasets {
        this['alert'] = alert;
        return this;
    }
    public withAllAccounts(allAccounts: boolean): ListCollectConfigResponseBodyDatasets {
        this['all_accounts'] = allAccounts;
        return this;
    }
    public set allAccounts(allAccounts: boolean  | undefined) {
        this['all_accounts'] = allAccounts;
    }
    public get allAccounts(): boolean | undefined {
        return this['all_accounts'];
    }
    public withAllowAlert(allowAlert: boolean): ListCollectConfigResponseBodyDatasets {
        this['allow_alert'] = allowAlert;
        return this;
    }
    public set allowAlert(allowAlert: boolean  | undefined) {
        this['allow_alert'] = allowAlert;
    }
    public get allowAlert(): boolean | undefined {
        return this['allow_alert'];
    }
    public withDataspaceId(dataspaceId: string): ListCollectConfigResponseBodyDatasets {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withDataspaceName(dataspaceName: string): ListCollectConfigResponseBodyDatasets {
        this['dataspace_name'] = dataspaceName;
        return this;
    }
    public set dataspaceName(dataspaceName: string  | undefined) {
        this['dataspace_name'] = dataspaceName;
    }
    public get dataspaceName(): string | undefined {
        return this['dataspace_name'];
    }
    public withEnable(enable: string): ListCollectConfigResponseBodyDatasets {
        this['enable'] = enable;
        return this;
    }
    public withLastActiveTime(lastActiveTime: number): ListCollectConfigResponseBodyDatasets {
        this['last_active_time'] = lastActiveTime;
        return this;
    }
    public set lastActiveTime(lastActiveTime: number  | undefined) {
        this['last_active_time'] = lastActiveTime;
    }
    public get lastActiveTime(): number | undefined {
        return this['last_active_time'];
    }
    public withLimit(limit: string): ListCollectConfigResponseBodyDatasets {
        this['limit'] = limit;
        return this;
    }
    public withNewAccountAutoAccess(newAccountAutoAccess: boolean): ListCollectConfigResponseBodyDatasets {
        this['new_account_auto_access'] = newAccountAutoAccess;
        return this;
    }
    public set newAccountAutoAccess(newAccountAutoAccess: boolean  | undefined) {
        this['new_account_auto_access'] = newAccountAutoAccess;
    }
    public get newAccountAutoAccess(): boolean | undefined {
        return this['new_account_auto_access'];
    }
    public withProcessStatus(processStatus: ListCollectConfigResponseBodyDatasetsProcessStatusEnum | string): ListCollectConfigResponseBodyDatasets {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: ListCollectConfigResponseBodyDatasetsProcessStatusEnum | string  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): ListCollectConfigResponseBodyDatasetsProcessStatusEnum | string | undefined {
        return this['process_status'];
    }
    public withReference(reference: ListCollectConfigResponseBodyReference): ListCollectConfigResponseBodyDatasets {
        this['reference'] = reference;
        return this;
    }
    public withRegionId(regionId: string): ListCollectConfigResponseBodyDatasets {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withSinkMsg(sinkMsg: string): ListCollectConfigResponseBodyDatasets {
        this['sink_msg'] = sinkMsg;
        return this;
    }
    public set sinkMsg(sinkMsg: string  | undefined) {
        this['sink_msg'] = sinkMsg;
    }
    public get sinkMsg(): string | undefined {
        return this['sink_msg'];
    }
    public withSourceId(sourceId: number): ListCollectConfigResponseBodyDatasets {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: number  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): number | undefined {
        return this['source_id'];
    }
    public withSourceName(sourceName: string): ListCollectConfigResponseBodyDatasets {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
    public withTarget(target: ListCollectConfigResponseBodyTarget): ListCollectConfigResponseBodyDatasets {
        this['target'] = target;
        return this;
    }
    public withType(type: string): ListCollectConfigResponseBodyDatasets {
        this['type'] = type;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ListCollectConfigResponseBodyDatasets {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCollectConfigResponseBodyDatasetsProcessStatusEnum {
    FAIL = 'FAIL',
    DEFAULT = 'DEFAULT',
    CREATING = 'CREATING',
    SUCCESS = 'SUCCESS'
}
