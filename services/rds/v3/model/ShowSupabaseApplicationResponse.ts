import { SupabaseManagedInstanceInfo } from './SupabaseManagedInstanceInfo';
import { SupabaseStorageComponentInfo } from './SupabaseStorageComponentInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSupabaseApplicationResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'enable_ssl'?: boolean;
    private 'cert_id'?: string;
    private 'security_group_id'?: string;
    private 'storage_component'?: SupabaseStorageComponentInfo;
    private 'managed_instance'?: SupabaseManagedInstanceInfo;
    private 'updated_time'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowSupabaseApplicationResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowSupabaseApplicationResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ShowSupabaseApplicationResponse {
        this['status'] = status;
        return this;
    }
    public withEnableSsl(enableSsl: boolean): ShowSupabaseApplicationResponse {
        this['enable_ssl'] = enableSsl;
        return this;
    }
    public set enableSsl(enableSsl: boolean  | undefined) {
        this['enable_ssl'] = enableSsl;
    }
    public get enableSsl(): boolean | undefined {
        return this['enable_ssl'];
    }
    public withCertId(certId: string): ShowSupabaseApplicationResponse {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string  | undefined) {
        this['cert_id'] = certId;
    }
    public get certId(): string | undefined {
        return this['cert_id'];
    }
    public withSecurityGroupId(securityGroupId: string): ShowSupabaseApplicationResponse {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withStorageComponent(storageComponent: SupabaseStorageComponentInfo): ShowSupabaseApplicationResponse {
        this['storage_component'] = storageComponent;
        return this;
    }
    public set storageComponent(storageComponent: SupabaseStorageComponentInfo  | undefined) {
        this['storage_component'] = storageComponent;
    }
    public get storageComponent(): SupabaseStorageComponentInfo | undefined {
        return this['storage_component'];
    }
    public withManagedInstance(managedInstance: SupabaseManagedInstanceInfo): ShowSupabaseApplicationResponse {
        this['managed_instance'] = managedInstance;
        return this;
    }
    public set managedInstance(managedInstance: SupabaseManagedInstanceInfo  | undefined) {
        this['managed_instance'] = managedInstance;
    }
    public get managedInstance(): SupabaseManagedInstanceInfo | undefined {
        return this['managed_instance'];
    }
    public withUpdatedTime(updatedTime: number): ShowSupabaseApplicationResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: number  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): number | undefined {
        return this['updated_time'];
    }
}