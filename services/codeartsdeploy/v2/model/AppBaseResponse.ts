import { TaskBaseBody } from './TaskBaseBody';


export class AppBaseResponse {
    public id?: string;
    public name?: string;
    public region?: string;
    private 'arrange_infos'?: Array<TaskBaseBody>;
    public constructor() { 
    }
    public withId(id: string): AppBaseResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AppBaseResponse {
        this['name'] = name;
        return this;
    }
    public withRegion(region: string): AppBaseResponse {
        this['region'] = region;
        return this;
    }
    public withArrangeInfos(arrangeInfos: Array<TaskBaseBody>): AppBaseResponse {
        this['arrange_infos'] = arrangeInfos;
        return this;
    }
    public set arrangeInfos(arrangeInfos: Array<TaskBaseBody>  | undefined) {
        this['arrange_infos'] = arrangeInfos;
    }
    public get arrangeInfos(): Array<TaskBaseBody> | undefined {
        return this['arrange_infos'];
    }
}