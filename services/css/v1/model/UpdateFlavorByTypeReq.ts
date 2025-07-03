

export class UpdateFlavorByTypeReq {
    private 'need_check_replica'?: boolean;
    private 'new_flavor_id'?: string;
    private 'is_auto_pay'?: number;
    public constructor(newFlavorId?: string) { 
        this['new_flavor_id'] = newFlavorId;
    }
    public withNeedCheckReplica(needCheckReplica: boolean): UpdateFlavorByTypeReq {
        this['need_check_replica'] = needCheckReplica;
        return this;
    }
    public set needCheckReplica(needCheckReplica: boolean  | undefined) {
        this['need_check_replica'] = needCheckReplica;
    }
    public get needCheckReplica(): boolean | undefined {
        return this['need_check_replica'];
    }
    public withNewFlavorId(newFlavorId: string): UpdateFlavorByTypeReq {
        this['new_flavor_id'] = newFlavorId;
        return this;
    }
    public set newFlavorId(newFlavorId: string  | undefined) {
        this['new_flavor_id'] = newFlavorId;
    }
    public get newFlavorId(): string | undefined {
        return this['new_flavor_id'];
    }
    public withIsAutoPay(isAutoPay: number): UpdateFlavorByTypeReq {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: number  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): number | undefined {
        return this['is_auto_pay'];
    }
}