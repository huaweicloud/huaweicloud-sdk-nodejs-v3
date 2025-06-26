

export class DatabaseObjectInfo {
    private 'obj_name'?: string;
    public constructor() { 
    }
    public withObjName(objName: string): DatabaseObjectInfo {
        this['obj_name'] = objName;
        return this;
    }
    public set objName(objName: string  | undefined) {
        this['obj_name'] = objName;
    }
    public get objName(): string | undefined {
        return this['obj_name'];
    }
}