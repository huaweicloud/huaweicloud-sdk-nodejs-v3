import { ActionInfo } from './ActionInfo';
import { DdmGroupInfo } from './DdmGroupInfo';
import { TagsInfo } from './TagsInfo';


export class InstanceDetail {
    public id?: string;
    public name?: string;
    public alias?: string;
    private 'project_id'?: string;
    private 'cluster_mode'?: string;
    public status?: string;
    private 'bpdomain_id'?: string;
    private 'user_id'?: string;
    private 'datastore_version'?: string;
    private 'datastore_type'?: string;
    private 'create_at'?: string;
    private 'update_at'?: string;
    private 'delete_at'?: string;
    private 'new_version_available'?: boolean;
    private 'rollback_version_available'?: boolean;
    private 'degrade_version_available'?: boolean;
    private 'public_ip'?: string;
    public port?: string;
    private 'create_fail_error_code'?: string;
    private 'time_zone'?: string;
    private 'pay_model'?: string;
    private 'order_id'?: string;
    public period?: number;
    private 'is_frozen'?: boolean;
    private 'frozen_time'?: string;
    public actions?: Array<ActionInfo>;
    private 'only_default_group'?: boolean;
    public groups?: Array<DdmGroupInfo>;
    private 'extend_map'?: { [key: string]: string; };
    private 'tags_info'?: Array<TagsInfo>;
    private 'admin_user_name'?: string;
    private 'eip_binding_info'?: object;
    private 'enable_ssl'?: number;
    public constructor() { 
    }
    public withId(id: string): InstanceDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): InstanceDetail {
        this['name'] = name;
        return this;
    }
    public withAlias(alias: string): InstanceDetail {
        this['alias'] = alias;
        return this;
    }
    public withProjectId(projectId: string): InstanceDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withClusterMode(clusterMode: string): InstanceDetail {
        this['cluster_mode'] = clusterMode;
        return this;
    }
    public set clusterMode(clusterMode: string  | undefined) {
        this['cluster_mode'] = clusterMode;
    }
    public get clusterMode(): string | undefined {
        return this['cluster_mode'];
    }
    public withStatus(status: string): InstanceDetail {
        this['status'] = status;
        return this;
    }
    public withBpdomainId(bpdomainId: string): InstanceDetail {
        this['bpdomain_id'] = bpdomainId;
        return this;
    }
    public set bpdomainId(bpdomainId: string  | undefined) {
        this['bpdomain_id'] = bpdomainId;
    }
    public get bpdomainId(): string | undefined {
        return this['bpdomain_id'];
    }
    public withUserId(userId: string): InstanceDetail {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withDatastoreVersion(datastoreVersion: string): InstanceDetail {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string  | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion(): string | undefined {
        return this['datastore_version'];
    }
    public withDatastoreType(datastoreType: string): InstanceDetail {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withCreateAt(createAt: string): InstanceDetail {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: string): InstanceDetail {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
    public withDeleteAt(deleteAt: string): InstanceDetail {
        this['delete_at'] = deleteAt;
        return this;
    }
    public set deleteAt(deleteAt: string  | undefined) {
        this['delete_at'] = deleteAt;
    }
    public get deleteAt(): string | undefined {
        return this['delete_at'];
    }
    public withNewVersionAvailable(newVersionAvailable: boolean): InstanceDetail {
        this['new_version_available'] = newVersionAvailable;
        return this;
    }
    public set newVersionAvailable(newVersionAvailable: boolean  | undefined) {
        this['new_version_available'] = newVersionAvailable;
    }
    public get newVersionAvailable(): boolean | undefined {
        return this['new_version_available'];
    }
    public withRollbackVersionAvailable(rollbackVersionAvailable: boolean): InstanceDetail {
        this['rollback_version_available'] = rollbackVersionAvailable;
        return this;
    }
    public set rollbackVersionAvailable(rollbackVersionAvailable: boolean  | undefined) {
        this['rollback_version_available'] = rollbackVersionAvailable;
    }
    public get rollbackVersionAvailable(): boolean | undefined {
        return this['rollback_version_available'];
    }
    public withDegradeVersionAvailable(degradeVersionAvailable: boolean): InstanceDetail {
        this['degrade_version_available'] = degradeVersionAvailable;
        return this;
    }
    public set degradeVersionAvailable(degradeVersionAvailable: boolean  | undefined) {
        this['degrade_version_available'] = degradeVersionAvailable;
    }
    public get degradeVersionAvailable(): boolean | undefined {
        return this['degrade_version_available'];
    }
    public withPublicIp(publicIp: string): InstanceDetail {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPort(port: string): InstanceDetail {
        this['port'] = port;
        return this;
    }
    public withCreateFailErrorCode(createFailErrorCode: string): InstanceDetail {
        this['create_fail_error_code'] = createFailErrorCode;
        return this;
    }
    public set createFailErrorCode(createFailErrorCode: string  | undefined) {
        this['create_fail_error_code'] = createFailErrorCode;
    }
    public get createFailErrorCode(): string | undefined {
        return this['create_fail_error_code'];
    }
    public withTimeZone(timeZone: string): InstanceDetail {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withPayModel(payModel: string): InstanceDetail {
        this['pay_model'] = payModel;
        return this;
    }
    public set payModel(payModel: string  | undefined) {
        this['pay_model'] = payModel;
    }
    public get payModel(): string | undefined {
        return this['pay_model'];
    }
    public withOrderId(orderId: string): InstanceDetail {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withPeriod(period: number): InstanceDetail {
        this['period'] = period;
        return this;
    }
    public withIsFrozen(isFrozen: boolean): InstanceDetail {
        this['is_frozen'] = isFrozen;
        return this;
    }
    public set isFrozen(isFrozen: boolean  | undefined) {
        this['is_frozen'] = isFrozen;
    }
    public get isFrozen(): boolean | undefined {
        return this['is_frozen'];
    }
    public withFrozenTime(frozenTime: string): InstanceDetail {
        this['frozen_time'] = frozenTime;
        return this;
    }
    public set frozenTime(frozenTime: string  | undefined) {
        this['frozen_time'] = frozenTime;
    }
    public get frozenTime(): string | undefined {
        return this['frozen_time'];
    }
    public withActions(actions: Array<ActionInfo>): InstanceDetail {
        this['actions'] = actions;
        return this;
    }
    public withOnlyDefaultGroup(onlyDefaultGroup: boolean): InstanceDetail {
        this['only_default_group'] = onlyDefaultGroup;
        return this;
    }
    public set onlyDefaultGroup(onlyDefaultGroup: boolean  | undefined) {
        this['only_default_group'] = onlyDefaultGroup;
    }
    public get onlyDefaultGroup(): boolean | undefined {
        return this['only_default_group'];
    }
    public withGroups(groups: Array<DdmGroupInfo>): InstanceDetail {
        this['groups'] = groups;
        return this;
    }
    public withExtendMap(extendMap: { [key: string]: string; }): InstanceDetail {
        this['extend_map'] = extendMap;
        return this;
    }
    public set extendMap(extendMap: { [key: string]: string; }  | undefined) {
        this['extend_map'] = extendMap;
    }
    public get extendMap(): { [key: string]: string; } | undefined {
        return this['extend_map'];
    }
    public withTagsInfo(tagsInfo: Array<TagsInfo>): InstanceDetail {
        this['tags_info'] = tagsInfo;
        return this;
    }
    public set tagsInfo(tagsInfo: Array<TagsInfo>  | undefined) {
        this['tags_info'] = tagsInfo;
    }
    public get tagsInfo(): Array<TagsInfo> | undefined {
        return this['tags_info'];
    }
    public withAdminUserName(adminUserName: string): InstanceDetail {
        this['admin_user_name'] = adminUserName;
        return this;
    }
    public set adminUserName(adminUserName: string  | undefined) {
        this['admin_user_name'] = adminUserName;
    }
    public get adminUserName(): string | undefined {
        return this['admin_user_name'];
    }
    public withEipBindingInfo(eipBindingInfo: object): InstanceDetail {
        this['eip_binding_info'] = eipBindingInfo;
        return this;
    }
    public set eipBindingInfo(eipBindingInfo: object  | undefined) {
        this['eip_binding_info'] = eipBindingInfo;
    }
    public get eipBindingInfo(): object | undefined {
        return this['eip_binding_info'];
    }
    public withEnableSsl(enableSsl: number): InstanceDetail {
        this['enable_ssl'] = enableSsl;
        return this;
    }
    public set enableSsl(enableSsl: number  | undefined) {
        this['enable_ssl'] = enableSsl;
    }
    public get enableSsl(): number | undefined {
        return this['enable_ssl'];
    }
}