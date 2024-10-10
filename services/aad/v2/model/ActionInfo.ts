import { DetailInfo } from './DetailInfo';


export class ActionInfo {
    public category?: string;
    public detail?: DetailInfo;
    public constructor() { 
    }
    public withCategory(category: string): ActionInfo {
        this['category'] = category;
        return this;
    }
    public withDetail(detail: DetailInfo): ActionInfo {
        this['detail'] = detail;
        return this;
    }
}