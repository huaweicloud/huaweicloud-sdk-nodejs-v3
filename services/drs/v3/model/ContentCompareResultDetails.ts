import { ContentCompareDetail } from './ContentCompareDetail';


export class ContentCompareResultDetails {
    private 'source_db_name'?: string;
    private 'content_compare_detail'?: Array<ContentCompareDetail>;
    private 'content_compare_detail_count'?: number;
    private 'content_uncompare_detail'?: Array<ContentCompareDetail>;
    private 'content_uncompare_detail_count'?: number;
    public constructor(sourceDbName?: string, contentCompareDetail?: Array<ContentCompareDetail>, contentCompareDetailCount?: number, contentUncompareDetailCount?: number) { 
        this['source_db_name'] = sourceDbName;
        this['content_compare_detail'] = contentCompareDetail;
        this['content_compare_detail_count'] = contentCompareDetailCount;
        this['content_uncompare_detail_count'] = contentUncompareDetailCount;
    }
    public withSourceDbName(sourceDbName: string): ContentCompareResultDetails {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string  | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName(): string | undefined {
        return this['source_db_name'];
    }
    public withContentCompareDetail(contentCompareDetail: Array<ContentCompareDetail>): ContentCompareResultDetails {
        this['content_compare_detail'] = contentCompareDetail;
        return this;
    }
    public set contentCompareDetail(contentCompareDetail: Array<ContentCompareDetail>  | undefined) {
        this['content_compare_detail'] = contentCompareDetail;
    }
    public get contentCompareDetail(): Array<ContentCompareDetail> | undefined {
        return this['content_compare_detail'];
    }
    public withContentCompareDetailCount(contentCompareDetailCount: number): ContentCompareResultDetails {
        this['content_compare_detail_count'] = contentCompareDetailCount;
        return this;
    }
    public set contentCompareDetailCount(contentCompareDetailCount: number  | undefined) {
        this['content_compare_detail_count'] = contentCompareDetailCount;
    }
    public get contentCompareDetailCount(): number | undefined {
        return this['content_compare_detail_count'];
    }
    public withContentUncompareDetail(contentUncompareDetail: Array<ContentCompareDetail>): ContentCompareResultDetails {
        this['content_uncompare_detail'] = contentUncompareDetail;
        return this;
    }
    public set contentUncompareDetail(contentUncompareDetail: Array<ContentCompareDetail>  | undefined) {
        this['content_uncompare_detail'] = contentUncompareDetail;
    }
    public get contentUncompareDetail(): Array<ContentCompareDetail> | undefined {
        return this['content_uncompare_detail'];
    }
    public withContentUncompareDetailCount(contentUncompareDetailCount: number): ContentCompareResultDetails {
        this['content_uncompare_detail_count'] = contentUncompareDetailCount;
        return this;
    }
    public set contentUncompareDetailCount(contentUncompareDetailCount: number  | undefined) {
        this['content_uncompare_detail_count'] = contentUncompareDetailCount;
    }
    public get contentUncompareDetailCount(): number | undefined {
        return this['content_uncompare_detail_count'];
    }
}