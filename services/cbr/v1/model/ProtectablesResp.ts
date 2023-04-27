import { ProtectableResult } from './ProtectableResult';


export class ProtectablesResp {
    public children: Array<object>;
    public detail?: object;
    public id: string;
    public name: string;
    public protectable: ProtectableResult;
    public size?: number;
    public status?: ProtectablesRespStatusEnum;
    public type: string;
    public constructor(children?: any, id?: any, name?: any, protectable?: any, type?: any) { 
        this['children'] = children;
        this['id'] = id;
        this['name'] = name;
        this['protectable'] = protectable;
        this['type'] = type;
    }
    public withChildren(children: Array<object>): ProtectablesResp {
        this['children'] = children;
        return this;
    }
    public withDetail(detail: object): ProtectablesResp {
        this['detail'] = detail;
        return this;
    }
    public withId(id: string): ProtectablesResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ProtectablesResp {
        this['name'] = name;
        return this;
    }
    public withProtectable(protectable: ProtectableResult): ProtectablesResp {
        this['protectable'] = protectable;
        return this;
    }
    public withSize(size: number): ProtectablesResp {
        this['size'] = size;
        return this;
    }
    public withStatus(status: ProtectablesRespStatusEnum): ProtectablesResp {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ProtectablesResp {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProtectablesRespStatusEnum {
    ACTIVE = 'active',
    DELETED = 'deleted',
    ERROR = 'error'
}
