import { CompareJobInfo } from './CompareJobInfo';
import { ContentCompareDetailInfo } from './ContentCompareDetailInfo';
import { ContentCompareOverviewInfo } from './ContentCompareOverviewInfo';
import { LineCompareOverviewInfo } from './LineCompareOverviewInfo';
import { ObjectsCompareDetailInfo } from './ObjectsCompareDetailInfo';
import { ObjectsCompareTaskInfo } from './ObjectsCompareTaskInfo';
import { TableLineCompareDetailInfo } from './TableLineCompareDetailInfo';


export class CompareResultInfo {
    private 'objects_compare_overview_info'?: ObjectsCompareTaskInfo | undefined;
    private 'objects_compare_detail_infos'?: Array<ObjectsCompareDetailInfo> | undefined;
    private 'data_compare_task_list'?: Array<CompareJobInfo> | undefined;
    private 'line_compare_overview_infos'?: Array<LineCompareOverviewInfo> | undefined;
    private 'line_compare_detail_infos'?: Array<TableLineCompareDetailInfo> | undefined;
    private 'content_compare_overview_infos'?: Array<ContentCompareOverviewInfo> | undefined;
    private 'content_compare_detail_infos'?: Array<ContentCompareDetailInfo> | undefined;
    public constructor() { 
    }
    public withObjectsCompareOverviewInfo(objectsCompareOverviewInfo: ObjectsCompareTaskInfo): CompareResultInfo {
        this['objects_compare_overview_info'] = objectsCompareOverviewInfo;
        return this;
    }
    public set objectsCompareOverviewInfo(objectsCompareOverviewInfo: ObjectsCompareTaskInfo | undefined) {
        this['objects_compare_overview_info'] = objectsCompareOverviewInfo;
    }
    public get objectsCompareOverviewInfo() {
        return this['objects_compare_overview_info'];
    }
    public withObjectsCompareDetailInfos(objectsCompareDetailInfos: Array<ObjectsCompareDetailInfo>): CompareResultInfo {
        this['objects_compare_detail_infos'] = objectsCompareDetailInfos;
        return this;
    }
    public set objectsCompareDetailInfos(objectsCompareDetailInfos: Array<ObjectsCompareDetailInfo> | undefined) {
        this['objects_compare_detail_infos'] = objectsCompareDetailInfos;
    }
    public get objectsCompareDetailInfos() {
        return this['objects_compare_detail_infos'];
    }
    public withDataCompareTaskList(dataCompareTaskList: Array<CompareJobInfo>): CompareResultInfo {
        this['data_compare_task_list'] = dataCompareTaskList;
        return this;
    }
    public set dataCompareTaskList(dataCompareTaskList: Array<CompareJobInfo> | undefined) {
        this['data_compare_task_list'] = dataCompareTaskList;
    }
    public get dataCompareTaskList() {
        return this['data_compare_task_list'];
    }
    public withLineCompareOverviewInfos(lineCompareOverviewInfos: Array<LineCompareOverviewInfo>): CompareResultInfo {
        this['line_compare_overview_infos'] = lineCompareOverviewInfos;
        return this;
    }
    public set lineCompareOverviewInfos(lineCompareOverviewInfos: Array<LineCompareOverviewInfo> | undefined) {
        this['line_compare_overview_infos'] = lineCompareOverviewInfos;
    }
    public get lineCompareOverviewInfos() {
        return this['line_compare_overview_infos'];
    }
    public withLineCompareDetailInfos(lineCompareDetailInfos: Array<TableLineCompareDetailInfo>): CompareResultInfo {
        this['line_compare_detail_infos'] = lineCompareDetailInfos;
        return this;
    }
    public set lineCompareDetailInfos(lineCompareDetailInfos: Array<TableLineCompareDetailInfo> | undefined) {
        this['line_compare_detail_infos'] = lineCompareDetailInfos;
    }
    public get lineCompareDetailInfos() {
        return this['line_compare_detail_infos'];
    }
    public withContentCompareOverviewInfos(contentCompareOverviewInfos: Array<ContentCompareOverviewInfo>): CompareResultInfo {
        this['content_compare_overview_infos'] = contentCompareOverviewInfos;
        return this;
    }
    public set contentCompareOverviewInfos(contentCompareOverviewInfos: Array<ContentCompareOverviewInfo> | undefined) {
        this['content_compare_overview_infos'] = contentCompareOverviewInfos;
    }
    public get contentCompareOverviewInfos() {
        return this['content_compare_overview_infos'];
    }
    public withContentCompareDetailInfos(contentCompareDetailInfos: Array<ContentCompareDetailInfo>): CompareResultInfo {
        this['content_compare_detail_infos'] = contentCompareDetailInfos;
        return this;
    }
    public set contentCompareDetailInfos(contentCompareDetailInfos: Array<ContentCompareDetailInfo> | undefined) {
        this['content_compare_detail_infos'] = contentCompareDetailInfos;
    }
    public get contentCompareDetailInfos() {
        return this['content_compare_detail_infos'];
    }
}