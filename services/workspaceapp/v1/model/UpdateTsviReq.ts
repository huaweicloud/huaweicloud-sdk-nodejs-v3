import { UpdateTsvi } from './UpdateTsvi';


export class UpdateTsviReq {
    public items?: Array<UpdateTsvi>;
    public constructor(items?: Array<UpdateTsvi>) { 
        this['items'] = items;
    }
    public withItems(items: Array<UpdateTsvi>): UpdateTsviReq {
        this['items'] = items;
        return this;
    }
}