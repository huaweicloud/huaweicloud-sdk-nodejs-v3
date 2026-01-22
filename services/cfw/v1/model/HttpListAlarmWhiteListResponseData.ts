import { EipInfo } from './EipInfo';


export class HttpListAlarmWhiteListResponseData {
    public list?: Array<EipInfo>;
    public pages?: number;
    public size?: number;
    public constructor() { 
    }
    public withList(list: Array<EipInfo>): HttpListAlarmWhiteListResponseData {
        this['list'] = list;
        return this;
    }
    public withPages(pages: number): HttpListAlarmWhiteListResponseData {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): HttpListAlarmWhiteListResponseData {
        this['size'] = size;
        return this;
    }
}