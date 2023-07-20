import { ExtraInfoList } from './ExtraInfoList';


export class BusinessCardResult {
    public name?: Array<string>;
    public title?: Array<string>;
    public company?: Array<string>;
    public department?: Array<string>;
    public phone?: Array<string>;
    public address?: Array<string>;
    public email?: Array<string>;
    public fax?: Array<string>;
    public postcode?: Array<string>;
    public website?: Array<string>;
    private 'extra_info_list'?: Array<ExtraInfoList>;
    private 'adjusted_image'?: string;
    public constructor() { 
    }
    public withName(name: Array<string>): BusinessCardResult {
        this['name'] = name;
        return this;
    }
    public withTitle(title: Array<string>): BusinessCardResult {
        this['title'] = title;
        return this;
    }
    public withCompany(company: Array<string>): BusinessCardResult {
        this['company'] = company;
        return this;
    }
    public withDepartment(department: Array<string>): BusinessCardResult {
        this['department'] = department;
        return this;
    }
    public withPhone(phone: Array<string>): BusinessCardResult {
        this['phone'] = phone;
        return this;
    }
    public withAddress(address: Array<string>): BusinessCardResult {
        this['address'] = address;
        return this;
    }
    public withEmail(email: Array<string>): BusinessCardResult {
        this['email'] = email;
        return this;
    }
    public withFax(fax: Array<string>): BusinessCardResult {
        this['fax'] = fax;
        return this;
    }
    public withPostcode(postcode: Array<string>): BusinessCardResult {
        this['postcode'] = postcode;
        return this;
    }
    public withWebsite(website: Array<string>): BusinessCardResult {
        this['website'] = website;
        return this;
    }
    public withExtraInfoList(extraInfoList: Array<ExtraInfoList>): BusinessCardResult {
        this['extra_info_list'] = extraInfoList;
        return this;
    }
    public set extraInfoList(extraInfoList: Array<ExtraInfoList>  | undefined) {
        this['extra_info_list'] = extraInfoList;
    }
    public get extraInfoList(): Array<ExtraInfoList> | undefined {
        return this['extra_info_list'];
    }
    public withAdjustedImage(adjustedImage: string): BusinessCardResult {
        this['adjusted_image'] = adjustedImage;
        return this;
    }
    public set adjustedImage(adjustedImage: string  | undefined) {
        this['adjusted_image'] = adjustedImage;
    }
    public get adjustedImage(): string | undefined {
        return this['adjusted_image'];
    }
}