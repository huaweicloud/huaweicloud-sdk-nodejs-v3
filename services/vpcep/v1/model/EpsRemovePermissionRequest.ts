

export class EpsRemovePermissionRequest {
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): EpsRemovePermissionRequest {
        this['id'] = id;
        return this;
    }
}