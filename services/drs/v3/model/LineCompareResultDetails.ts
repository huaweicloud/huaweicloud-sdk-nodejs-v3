import { LineCompareDetail } from './LineCompareDetail';


export class LineCompareResultDetails {
    private 'source_db_name'?: string;
    private 'line_compare_detail'?: Array<LineCompareDetail>;
    private 'line_compare_detail_count'?: number;
    public constructor(sourceDbName?: string, lineCompareDetail?: Array<LineCompareDetail>, lineCompareDetailCount?: number) { 
        this['source_db_name'] = sourceDbName;
        this['line_compare_detail'] = lineCompareDetail;
        this['line_compare_detail_count'] = lineCompareDetailCount;
    }
    public withSourceDbName(sourceDbName: string): LineCompareResultDetails {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string  | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName(): string | undefined {
        return this['source_db_name'];
    }
    public withLineCompareDetail(lineCompareDetail: Array<LineCompareDetail>): LineCompareResultDetails {
        this['line_compare_detail'] = lineCompareDetail;
        return this;
    }
    public set lineCompareDetail(lineCompareDetail: Array<LineCompareDetail>  | undefined) {
        this['line_compare_detail'] = lineCompareDetail;
    }
    public get lineCompareDetail(): Array<LineCompareDetail> | undefined {
        return this['line_compare_detail'];
    }
    public withLineCompareDetailCount(lineCompareDetailCount: number): LineCompareResultDetails {
        this['line_compare_detail_count'] = lineCompareDetailCount;
        return this;
    }
    public set lineCompareDetailCount(lineCompareDetailCount: number  | undefined) {
        this['line_compare_detail_count'] = lineCompareDetailCount;
    }
    public get lineCompareDetailCount(): number | undefined {
        return this['line_compare_detail_count'];
    }
}