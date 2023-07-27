import { UrlDomain } from './UrlDomain';


export class ApiGroupCommonInfo {
    public id?: string;
    public name?: string;
    public status?: ApiGroupCommonInfoStatusEnum | number;
    private 'sl_domain'?: string;
    private 'register_time'?: Date;
    private 'update_time'?: Date;
    private 'on_sell_status'?: number;
    private 'url_domains'?: Array<UrlDomain>;
    public constructor(id?: string, name?: string, status?: number, slDomain?: string, registerTime?: Date, updateTime?: Date, onSellStatus?: number) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['sl_domain'] = slDomain;
        this['register_time'] = registerTime;
        this['update_time'] = updateTime;
        this['on_sell_status'] = onSellStatus;
    }
    public withId(id: string): ApiGroupCommonInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ApiGroupCommonInfo {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ApiGroupCommonInfoStatusEnum | number): ApiGroupCommonInfo {
        this['status'] = status;
        return this;
    }
    public withSlDomain(slDomain: string): ApiGroupCommonInfo {
        this['sl_domain'] = slDomain;
        return this;
    }
    public set slDomain(slDomain: string  | undefined) {
        this['sl_domain'] = slDomain;
    }
    public get slDomain(): string | undefined {
        return this['sl_domain'];
    }
    public withRegisterTime(registerTime: Date): ApiGroupCommonInfo {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: Date  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): Date | undefined {
        return this['register_time'];
    }
    public withUpdateTime(updateTime: Date): ApiGroupCommonInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withOnSellStatus(onSellStatus: number): ApiGroupCommonInfo {
        this['on_sell_status'] = onSellStatus;
        return this;
    }
    public set onSellStatus(onSellStatus: number  | undefined) {
        this['on_sell_status'] = onSellStatus;
    }
    public get onSellStatus(): number | undefined {
        return this['on_sell_status'];
    }
    public withUrlDomains(urlDomains: Array<UrlDomain>): ApiGroupCommonInfo {
        this['url_domains'] = urlDomains;
        return this;
    }
    public set urlDomains(urlDomains: Array<UrlDomain>  | undefined) {
        this['url_domains'] = urlDomains;
    }
    public get urlDomains(): Array<UrlDomain> | undefined {
        return this['url_domains'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiGroupCommonInfoStatusEnum {
    NUMBER_1 = 1
}
