import { TmsKeyValue } from './TmsKeyValue';


export class TmsUpdatePublicReq {
    public action?: TmsUpdatePublicReqActionEnum | string;
    public tags?: Array<TmsKeyValue>;
    public constructor(action?: string, tags?: Array<TmsKeyValue>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: TmsUpdatePublicReqActionEnum | string): TmsUpdatePublicReq {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<TmsKeyValue>): TmsUpdatePublicReq {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TmsUpdatePublicReqActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
