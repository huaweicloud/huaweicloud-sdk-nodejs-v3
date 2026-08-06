

export class GetkeyRotationStatusResponseBodyKeyMaterials {
    private 'material_id'?: string;
    private 'charge_id'?: string;
    private 'create_time'?: string;
    private 'expiration_time'?: string;
    public state?: number;
    public constructor() { 
    }
    public withMaterialId(materialId: string): GetkeyRotationStatusResponseBodyKeyMaterials {
        this['material_id'] = materialId;
        return this;
    }
    public set materialId(materialId: string  | undefined) {
        this['material_id'] = materialId;
    }
    public get materialId(): string | undefined {
        return this['material_id'];
    }
    public withChargeId(chargeId: string): GetkeyRotationStatusResponseBodyKeyMaterials {
        this['charge_id'] = chargeId;
        return this;
    }
    public set chargeId(chargeId: string  | undefined) {
        this['charge_id'] = chargeId;
    }
    public get chargeId(): string | undefined {
        return this['charge_id'];
    }
    public withCreateTime(createTime: string): GetkeyRotationStatusResponseBodyKeyMaterials {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withExpirationTime(expirationTime: string): GetkeyRotationStatusResponseBodyKeyMaterials {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: string  | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime(): string | undefined {
        return this['expiration_time'];
    }
    public withState(state: number): GetkeyRotationStatusResponseBodyKeyMaterials {
        this['state'] = state;
        return this;
    }
}