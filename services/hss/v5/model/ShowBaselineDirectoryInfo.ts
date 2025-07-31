import { ShowBaselineDirectoryInfoDataList } from './ShowBaselineDirectoryInfoDataList';


export class ShowBaselineDirectoryInfo {
    public type?: string;
    public standard?: string;
    private 'data_list'?: Array<ShowBaselineDirectoryInfoDataList>;
    public constructor() { 
    }
    public withType(type: string): ShowBaselineDirectoryInfo {
        this['type'] = type;
        return this;
    }
    public withStandard(standard: string): ShowBaselineDirectoryInfo {
        this['standard'] = standard;
        return this;
    }
    public withDataList(dataList: Array<ShowBaselineDirectoryInfoDataList>): ShowBaselineDirectoryInfo {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ShowBaselineDirectoryInfoDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ShowBaselineDirectoryInfoDataList> | undefined {
        return this['data_list'];
    }
}