

export class DDSEmergencyLogInfo {
    public id?: number;
    private 'execute_sql'?: string;
    private 'create_at'?: number;
    public constructor() { 
    }
    public withId(id: number): DDSEmergencyLogInfo {
        this['id'] = id;
        return this;
    }
    public withExecuteSql(executeSql: string): DDSEmergencyLogInfo {
        this['execute_sql'] = executeSql;
        return this;
    }
    public set executeSql(executeSql: string  | undefined) {
        this['execute_sql'] = executeSql;
    }
    public get executeSql(): string | undefined {
        return this['execute_sql'];
    }
    public withCreateAt(createAt: number): DDSEmergencyLogInfo {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
}