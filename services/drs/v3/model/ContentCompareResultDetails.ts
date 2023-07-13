import { ContentCompareDetail } from './ContentCompareDetail';


export class ContentCompareResultDetails {
    private 'source_db_name': string | undefined;
    private 'content_compare_detail': Array<ContentCompareDetail> | undefined;
    private 'content_compare_detail_count': number | undefined;
    private 'content_uncompare_detail'?: Array<ContentCompareDetail> | undefined;
    private 'content_uncompare_detail_count': number | undefined;
    public constructor(sourceDbName?: any, contentCompareDetail?: any, contentCompareDetailCount?: any, contentUncompareDetailCount?: any) { 
        this['source_db_name'] = sourceDbName;
        this['content_compare_detail'] = contentCompareDetail;
        this['content_compare_detail_count'] = contentCompareDetailCount;
        this['content_uncompare_detail_count'] = contentUncompareDetailCount;
    }
    public withSourceDbName(sourceDbName: string): ContentCompareResultDetails {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName() {
        return this['source_db_name'];
    }
    public withContentCompareDetail(contentCompareDetail: Array<ContentCompareDetail>): ContentCompareResultDetails {
        this['content_compare_detail'] = contentCompareDetail;
        return this;
    }
    public set contentCompareDetail(contentCompareDetail: Array<ContentCompareDetail> | undefined) {
        this['content_compare_detail'] = contentCompareDetail;
    }
    public get contentCompareDetail() {
        return this['content_compare_detail'];
    }
    public withContentCompareDetailCount(contentCompareDetailCount: number): ContentCompareResultDetails {
        this['content_compare_detail_count'] = contentCompareDetailCount;
        return this;
    }
    public set contentCompareDetailCount(contentCompareDetailCount: number | undefined) {
        this['content_compare_detail_count'] = contentCompareDetailCount;
    }
    public get contentCompareDetailCount() {
        return this['content_compare_detail_count'];
    }
    public withContentUncompareDetail(contentUncompareDetail: Array<ContentCompareDetail>): ContentCompareResultDetails {
        this['content_uncompare_detail'] = contentUncompareDetail;
        return this;
    }
    public set contentUncompareDetail(contentUncompareDetail: Array<ContentCompareDetail> | undefined) {
        this['content_uncompare_detail'] = contentUncompareDetail;
    }
    public get contentUncompareDetail() {
        return this['content_uncompare_detail'];
    }
    public withContentUncompareDetailCount(contentUncompareDetailCount: number): ContentCompareResultDetails {
        this['content_uncompare_detail_count'] = contentUncompareDetailCount;
        return this;
    }
    public set contentUncompareDetailCount(contentUncompareDetailCount: number | undefined) {
        this['content_uncompare_detail_count'] = contentUncompareDetailCount;
    }
    public get contentUncompareDetailCount() {
        return this['content_uncompare_detail_count'];
    }
}