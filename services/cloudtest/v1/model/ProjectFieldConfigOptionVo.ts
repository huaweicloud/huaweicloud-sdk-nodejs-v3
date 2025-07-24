import { NameAndIdVo } from './NameAndIdVo';


export class ProjectFieldConfigOptionVo {
    public uri?: string;
    public name?: string;
    public code?: string;
    public updator?: NameAndIdVo;
    public description?: string;
    public flag?: number;
    private 'sort_numb'?: number;
    public creator?: NameAndIdVo;
    private 'create_time_stamp'?: number;
    private 'update_time_stamp'?: number;
    public constructor() { 
    }
    public withUri(uri: string): ProjectFieldConfigOptionVo {
        this['uri'] = uri;
        return this;
    }
    public withName(name: string): ProjectFieldConfigOptionVo {
        this['name'] = name;
        return this;
    }
    public withCode(code: string): ProjectFieldConfigOptionVo {
        this['code'] = code;
        return this;
    }
    public withUpdator(updator: NameAndIdVo): ProjectFieldConfigOptionVo {
        this['updator'] = updator;
        return this;
    }
    public withDescription(description: string): ProjectFieldConfigOptionVo {
        this['description'] = description;
        return this;
    }
    public withFlag(flag: number): ProjectFieldConfigOptionVo {
        this['flag'] = flag;
        return this;
    }
    public withSortNumb(sortNumb: number): ProjectFieldConfigOptionVo {
        this['sort_numb'] = sortNumb;
        return this;
    }
    public set sortNumb(sortNumb: number  | undefined) {
        this['sort_numb'] = sortNumb;
    }
    public get sortNumb(): number | undefined {
        return this['sort_numb'];
    }
    public withCreator(creator: NameAndIdVo): ProjectFieldConfigOptionVo {
        this['creator'] = creator;
        return this;
    }
    public withCreateTimeStamp(createTimeStamp: number): ProjectFieldConfigOptionVo {
        this['create_time_stamp'] = createTimeStamp;
        return this;
    }
    public set createTimeStamp(createTimeStamp: number  | undefined) {
        this['create_time_stamp'] = createTimeStamp;
    }
    public get createTimeStamp(): number | undefined {
        return this['create_time_stamp'];
    }
    public withUpdateTimeStamp(updateTimeStamp: number): ProjectFieldConfigOptionVo {
        this['update_time_stamp'] = updateTimeStamp;
        return this;
    }
    public set updateTimeStamp(updateTimeStamp: number  | undefined) {
        this['update_time_stamp'] = updateTimeStamp;
    }
    public get updateTimeStamp(): number | undefined {
        return this['update_time_stamp'];
    }
}