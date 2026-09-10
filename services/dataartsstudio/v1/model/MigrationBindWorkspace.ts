

export class MigrationBindWorkspace {
    public id?: string;
    public action?: MigrationBindWorkspaceActionEnum | string;
    public constructor(id?: string, action?: string) { 
        this['id'] = id;
        this['action'] = action;
    }
    public withId(id: string): MigrationBindWorkspace {
        this['id'] = id;
        return this;
    }
    public withAction(action: MigrationBindWorkspaceActionEnum | string): MigrationBindWorkspace {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MigrationBindWorkspaceActionEnum {
    BAND = 'band',
    REMOVE = 'remove'
}
