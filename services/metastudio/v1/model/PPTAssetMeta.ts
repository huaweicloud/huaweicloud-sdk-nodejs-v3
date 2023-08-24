import { PPTPageInfo } from './PPTPageInfo';


export class PPTAssetMeta {
    private 'auto_analysis'?: boolean;
    private 'ppt_analysis_status'?: PPTAssetMetaPptAnalysisStatusEnum | string;
    private 'page_count'?: number;
    public pages?: Array<PPTPageInfo>;
    public constructor() { 
    }
    public withAutoAnalysis(autoAnalysis: boolean): PPTAssetMeta {
        this['auto_analysis'] = autoAnalysis;
        return this;
    }
    public set autoAnalysis(autoAnalysis: boolean  | undefined) {
        this['auto_analysis'] = autoAnalysis;
    }
    public get autoAnalysis(): boolean | undefined {
        return this['auto_analysis'];
    }
    public withPptAnalysisStatus(pptAnalysisStatus: PPTAssetMetaPptAnalysisStatusEnum | string): PPTAssetMeta {
        this['ppt_analysis_status'] = pptAnalysisStatus;
        return this;
    }
    public set pptAnalysisStatus(pptAnalysisStatus: PPTAssetMetaPptAnalysisStatusEnum | string  | undefined) {
        this['ppt_analysis_status'] = pptAnalysisStatus;
    }
    public get pptAnalysisStatus(): PPTAssetMetaPptAnalysisStatusEnum | string | undefined {
        return this['ppt_analysis_status'];
    }
    public withPageCount(pageCount: number): PPTAssetMeta {
        this['page_count'] = pageCount;
        return this;
    }
    public set pageCount(pageCount: number  | undefined) {
        this['page_count'] = pageCount;
    }
    public get pageCount(): number | undefined {
        return this['page_count'];
    }
    public withPages(pages: Array<PPTPageInfo>): PPTAssetMeta {
        this['pages'] = pages;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PPTAssetMetaPptAnalysisStatusEnum {
    INITIALIZE = 'INITIALIZE',
    WAITING = 'WAITING',
    CONVERTING = 'CONVERTING',
    FAILED = 'FAILED',
    SUCCEEDED = 'SUCCEEDED',
    CANCELED = 'CANCELED'
}
