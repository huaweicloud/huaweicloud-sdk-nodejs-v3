import { Grant } from './Grant';


export class GrantAuthority {
    public type?: string;
    public database?: string;
    public schema?: string;
    private 'obj_name'?: string;
    private 'all_object'?: boolean;
    public future?: boolean;
    private 'future_object_owners'?: string;
    private 'column_name'?: Array<string>;
    public privileges?: Array<Grant>;
    public constructor() { 
    }
    public withType(type: string): GrantAuthority {
        this['type'] = type;
        return this;
    }
    public withDatabase(database: string): GrantAuthority {
        this['database'] = database;
        return this;
    }
    public withSchema(schema: string): GrantAuthority {
        this['schema'] = schema;
        return this;
    }
    public withObjName(objName: string): GrantAuthority {
        this['obj_name'] = objName;
        return this;
    }
    public set objName(objName: string  | undefined) {
        this['obj_name'] = objName;
    }
    public get objName(): string | undefined {
        return this['obj_name'];
    }
    public withAllObject(allObject: boolean): GrantAuthority {
        this['all_object'] = allObject;
        return this;
    }
    public set allObject(allObject: boolean  | undefined) {
        this['all_object'] = allObject;
    }
    public get allObject(): boolean | undefined {
        return this['all_object'];
    }
    public withFuture(future: boolean): GrantAuthority {
        this['future'] = future;
        return this;
    }
    public withFutureObjectOwners(futureObjectOwners: string): GrantAuthority {
        this['future_object_owners'] = futureObjectOwners;
        return this;
    }
    public set futureObjectOwners(futureObjectOwners: string  | undefined) {
        this['future_object_owners'] = futureObjectOwners;
    }
    public get futureObjectOwners(): string | undefined {
        return this['future_object_owners'];
    }
    public withColumnName(columnName: Array<string>): GrantAuthority {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: Array<string>  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): Array<string> | undefined {
        return this['column_name'];
    }
    public withPrivileges(privileges: Array<Grant>): GrantAuthority {
        this['privileges'] = privileges;
        return this;
    }
}