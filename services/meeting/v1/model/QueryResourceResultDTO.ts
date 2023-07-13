

export class QueryResourceResultDTO {
    public id?: string;
    public type?: string;
    public typeId?: string;
    public typeDesc?: string;
    public vmrMode?: number;
    public count?: number;
    public expireDate?: number;
    public orderId?: string;
    public status?: number;
    public editable?: boolean;
    public constructor() { 
    }
    public withId(id: string): QueryResourceResultDTO {
        this['id'] = id;
        return this;
    }
    public withType(type: string): QueryResourceResultDTO {
        this['type'] = type;
        return this;
    }
    public withTypeId(typeId: string): QueryResourceResultDTO {
        this['typeId'] = typeId;
        return this;
    }
    public withTypeDesc(typeDesc: string): QueryResourceResultDTO {
        this['typeDesc'] = typeDesc;
        return this;
    }
    public withVmrMode(vmrMode: number): QueryResourceResultDTO {
        this['vmrMode'] = vmrMode;
        return this;
    }
    public withCount(count: number): QueryResourceResultDTO {
        this['count'] = count;
        return this;
    }
    public withExpireDate(expireDate: number): QueryResourceResultDTO {
        this['expireDate'] = expireDate;
        return this;
    }
    public withOrderId(orderId: string): QueryResourceResultDTO {
        this['orderId'] = orderId;
        return this;
    }
    public withStatus(status: number): QueryResourceResultDTO {
        this['status'] = status;
        return this;
    }
    public withEditable(editable: boolean): QueryResourceResultDTO {
        this['editable'] = editable;
        return this;
    }
}