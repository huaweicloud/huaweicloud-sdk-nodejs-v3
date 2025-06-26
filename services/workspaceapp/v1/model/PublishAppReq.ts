import { PublishApp } from './PublishApp';


export class PublishAppReq {
    public items?: Array<PublishApp>;
    public constructor(items?: Array<PublishApp>) { 
        this['items'] = items;
    }
    public withItems(items: Array<PublishApp>): PublishAppReq {
        this['items'] = items;
        return this;
    }
}