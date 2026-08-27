import { ProductInfo } from './ProductInfo';


export class BatchCheckRejoinDomainResult {
    private 'desktop_id'?: string;
    private 'desktop_name'?: string;
    private 'image_name'?: string;
    private 'domain_status'?: number;
    private 'rejoin_able'?: boolean;
    public product?: ProductInfo;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): BatchCheckRejoinDomainResult {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDesktopName(desktopName: string): BatchCheckRejoinDomainResult {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withImageName(imageName: string): BatchCheckRejoinDomainResult {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withDomainStatus(domainStatus: number): BatchCheckRejoinDomainResult {
        this['domain_status'] = domainStatus;
        return this;
    }
    public set domainStatus(domainStatus: number  | undefined) {
        this['domain_status'] = domainStatus;
    }
    public get domainStatus(): number | undefined {
        return this['domain_status'];
    }
    public withRejoinAble(rejoinAble: boolean): BatchCheckRejoinDomainResult {
        this['rejoin_able'] = rejoinAble;
        return this;
    }
    public set rejoinAble(rejoinAble: boolean  | undefined) {
        this['rejoin_able'] = rejoinAble;
    }
    public get rejoinAble(): boolean | undefined {
        return this['rejoin_able'];
    }
    public withProduct(product: ProductInfo): BatchCheckRejoinDomainResult {
        this['product'] = product;
        return this;
    }
    public withErrorCode(errorCode: string): BatchCheckRejoinDomainResult {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): BatchCheckRejoinDomainResult {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}