import { AuthorizedObjects } from './AuthorizedObjects';


export class CreateDesktopPoolAuthorizedObjectsRequestBody {
    public objects?: Array<AuthorizedObjects>;
    public action?: CreateDesktopPoolAuthorizedObjectsRequestBodyActionEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withObjects(objects: Array<AuthorizedObjects>): CreateDesktopPoolAuthorizedObjectsRequestBody {
        this['objects'] = objects;
        return this;
    }
    public withAction(action: CreateDesktopPoolAuthorizedObjectsRequestBodyActionEnum | string): CreateDesktopPoolAuthorizedObjectsRequestBody {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDesktopPoolAuthorizedObjectsRequestBodyActionEnum {
    ADD = 'ADD',
    REMOVE = 'REMOVE'
}
