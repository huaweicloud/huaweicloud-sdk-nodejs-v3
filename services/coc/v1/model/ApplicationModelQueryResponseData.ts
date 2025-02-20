import { ApplicationInfo } from './ApplicationInfo';
import { ComponentInfo } from './ComponentInfo';
import { GroupInfo } from './GroupInfo';


export class ApplicationModelQueryResponseData {
    private 'sub_applications'?: Array<ApplicationInfo>;
    public components?: Array<ComponentInfo>;
    public groups?: Array<GroupInfo>;
    public constructor() { 
    }
    public withSubApplications(subApplications: Array<ApplicationInfo>): ApplicationModelQueryResponseData {
        this['sub_applications'] = subApplications;
        return this;
    }
    public set subApplications(subApplications: Array<ApplicationInfo>  | undefined) {
        this['sub_applications'] = subApplications;
    }
    public get subApplications(): Array<ApplicationInfo> | undefined {
        return this['sub_applications'];
    }
    public withComponents(components: Array<ComponentInfo>): ApplicationModelQueryResponseData {
        this['components'] = components;
        return this;
    }
    public withGroups(groups: Array<GroupInfo>): ApplicationModelQueryResponseData {
        this['groups'] = groups;
        return this;
    }
}