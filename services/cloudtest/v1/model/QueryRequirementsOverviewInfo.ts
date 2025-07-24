import { PiFilterInfo } from './PiFilterInfo';


export class QueryRequirementsOverviewInfo {
    private 'fixed_version_id'?: string;
    private 'module_id'?: string;
    private 'key_word'?: string;
    private 'page_size'?: number;
    private 'page_no'?: number;
    private 'pi_filter'?: PiFilterInfo;
    public constructor() { 
    }
    public withFixedVersionId(fixedVersionId: string): QueryRequirementsOverviewInfo {
        this['fixed_version_id'] = fixedVersionId;
        return this;
    }
    public set fixedVersionId(fixedVersionId: string  | undefined) {
        this['fixed_version_id'] = fixedVersionId;
    }
    public get fixedVersionId(): string | undefined {
        return this['fixed_version_id'];
    }
    public withModuleId(moduleId: string): QueryRequirementsOverviewInfo {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withKeyWord(keyWord: string): QueryRequirementsOverviewInfo {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string  | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord(): string | undefined {
        return this['key_word'];
    }
    public withPageSize(pageSize: number): QueryRequirementsOverviewInfo {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPageNo(pageNo: number): QueryRequirementsOverviewInfo {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPiFilter(piFilter: PiFilterInfo): QueryRequirementsOverviewInfo {
        this['pi_filter'] = piFilter;
        return this;
    }
    public set piFilter(piFilter: PiFilterInfo  | undefined) {
        this['pi_filter'] = piFilter;
    }
    public get piFilter(): PiFilterInfo | undefined {
        return this['pi_filter'];
    }
}