import { HibernateType } from './HibernateType';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHibernateTypeResponse extends SdkResponse {
    private 'tenant_id'?: string;
    private 'hibernate_type'?: HibernateType;
    private 'shutdown_days'?: number;
    public constructor() { 
        super();
    }
    public withTenantId(tenantId: string): ShowHibernateTypeResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withHibernateType(hibernateType: HibernateType): ShowHibernateTypeResponse {
        this['hibernate_type'] = hibernateType;
        return this;
    }
    public set hibernateType(hibernateType: HibernateType  | undefined) {
        this['hibernate_type'] = hibernateType;
    }
    public get hibernateType(): HibernateType | undefined {
        return this['hibernate_type'];
    }
    public withShutdownDays(shutdownDays: number): ShowHibernateTypeResponse {
        this['shutdown_days'] = shutdownDays;
        return this;
    }
    public set shutdownDays(shutdownDays: number  | undefined) {
        this['shutdown_days'] = shutdownDays;
    }
    public get shutdownDays(): number | undefined {
        return this['shutdown_days'];
    }
}