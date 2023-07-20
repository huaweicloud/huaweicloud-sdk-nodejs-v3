import { MysqlResizeFlavor } from './MysqlResizeFlavor';


export class MysqlChangeSpecificationRequest {
    private 'resize_flavor'?: MysqlResizeFlavor;
    private 'is_auto_pay'?: string;
    public constructor(resizeFlavor?: MysqlResizeFlavor) { 
        this['resize_flavor'] = resizeFlavor;
    }
    public withResizeFlavor(resizeFlavor: MysqlResizeFlavor): MysqlChangeSpecificationRequest {
        this['resize_flavor'] = resizeFlavor;
        return this;
    }
    public set resizeFlavor(resizeFlavor: MysqlResizeFlavor  | undefined) {
        this['resize_flavor'] = resizeFlavor;
    }
    public get resizeFlavor(): MysqlResizeFlavor | undefined {
        return this['resize_flavor'];
    }
    public withIsAutoPay(isAutoPay: string): MysqlChangeSpecificationRequest {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: string  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): string | undefined {
        return this['is_auto_pay'];
    }
}