

export class ListGroupPermissionResourcesRequest {
    public scope?: ListGroupPermissionResourcesRequestScopeEnum | string;
    public constructor() { 
    }
    public withScope(scope: ListGroupPermissionResourcesRequestScopeEnum | string): ListGroupPermissionResourcesRequest {
        this['scope'] = scope;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGroupPermissionResourcesRequestScopeEnum {
    GROUP = 'group',
    PROJECT = 'project',
    ALL = 'all'
}
