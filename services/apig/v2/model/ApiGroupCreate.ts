import { ApiGroupBase } from './ApiGroupBase';


export class ApiGroupCreate {
    public name?: string;
    public remark?: string;
    private 'roma_app_id'?: string;
    public version?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ApiGroupCreate {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): ApiGroupCreate {
        this['remark'] = remark;
        return this;
    }
    public withRomaAppId(romaAppId: string): ApiGroupCreate {
        this['roma_app_id'] = romaAppId;
        return this;
    }
    public set romaAppId(romaAppId: string  | undefined) {
        this['roma_app_id'] = romaAppId;
    }
    public get romaAppId(): string | undefined {
        return this['roma_app_id'];
    }
    public withVersion(version: string): ApiGroupCreate {
        this['version'] = version;
        return this;
    }
}