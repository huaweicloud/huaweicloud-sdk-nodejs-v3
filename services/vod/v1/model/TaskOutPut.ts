import { ObjectMetaData } from './ObjectMetaData';
import { ObsInfo } from './ObsInfo';


export class TaskOutPut {
    private 'obs_info'?: ObsInfo;
    private 'meta_data'?: ObjectMetaData;
    private 'file_url'?: string;
    public constructor() { 
    }
    public withObsInfo(obsInfo: ObsInfo): TaskOutPut {
        this['obs_info'] = obsInfo;
        return this;
    }
    public set obsInfo(obsInfo: ObsInfo  | undefined) {
        this['obs_info'] = obsInfo;
    }
    public get obsInfo(): ObsInfo | undefined {
        return this['obs_info'];
    }
    public withMetaData(metaData: ObjectMetaData): TaskOutPut {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: ObjectMetaData  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): ObjectMetaData | undefined {
        return this['meta_data'];
    }
    public withFileUrl(fileUrl: string): TaskOutPut {
        this['file_url'] = fileUrl;
        return this;
    }
    public set fileUrl(fileUrl: string  | undefined) {
        this['file_url'] = fileUrl;
    }
    public get fileUrl(): string | undefined {
        return this['file_url'];
    }
}