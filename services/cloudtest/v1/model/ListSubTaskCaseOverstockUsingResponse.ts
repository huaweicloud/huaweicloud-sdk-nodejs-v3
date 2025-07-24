import { SubtaskcaseOverstockDto } from './SubtaskcaseOverstockDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubTaskCaseOverstockUsingResponse extends SdkResponse {
    private 'end_row'?: number;
    private 'has_next_page'?: boolean;
    private 'has_previous_page'?: boolean;
    private 'is_first_page'?: boolean;
    private 'is_last_page'?: boolean;
    public list?: Array<SubtaskcaseOverstockDto>;
    private 'navigate_first_page'?: number;
    private 'navigate_last_page'?: number;
    private 'navigate_pages'?: number;
    private 'navigatepage_nums'?: Array<number>;
    private 'next_page'?: number;
    private 'page_num'?: number;
    private 'page_size'?: number;
    public pages?: number;
    private 'pre_page'?: number;
    public size?: number;
    private 'start_row'?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withEndRow(endRow: number): ListSubTaskCaseOverstockUsingResponse {
        this['end_row'] = endRow;
        return this;
    }
    public set endRow(endRow: number  | undefined) {
        this['end_row'] = endRow;
    }
    public get endRow(): number | undefined {
        return this['end_row'];
    }
    public withHasNextPage(hasNextPage: boolean): ListSubTaskCaseOverstockUsingResponse {
        this['has_next_page'] = hasNextPage;
        return this;
    }
    public set hasNextPage(hasNextPage: boolean  | undefined) {
        this['has_next_page'] = hasNextPage;
    }
    public get hasNextPage(): boolean | undefined {
        return this['has_next_page'];
    }
    public withHasPreviousPage(hasPreviousPage: boolean): ListSubTaskCaseOverstockUsingResponse {
        this['has_previous_page'] = hasPreviousPage;
        return this;
    }
    public set hasPreviousPage(hasPreviousPage: boolean  | undefined) {
        this['has_previous_page'] = hasPreviousPage;
    }
    public get hasPreviousPage(): boolean | undefined {
        return this['has_previous_page'];
    }
    public withIsFirstPage(isFirstPage: boolean): ListSubTaskCaseOverstockUsingResponse {
        this['is_first_page'] = isFirstPage;
        return this;
    }
    public set isFirstPage(isFirstPage: boolean  | undefined) {
        this['is_first_page'] = isFirstPage;
    }
    public get isFirstPage(): boolean | undefined {
        return this['is_first_page'];
    }
    public withIsLastPage(isLastPage: boolean): ListSubTaskCaseOverstockUsingResponse {
        this['is_last_page'] = isLastPage;
        return this;
    }
    public set isLastPage(isLastPage: boolean  | undefined) {
        this['is_last_page'] = isLastPage;
    }
    public get isLastPage(): boolean | undefined {
        return this['is_last_page'];
    }
    public withList(list: Array<SubtaskcaseOverstockDto>): ListSubTaskCaseOverstockUsingResponse {
        this['list'] = list;
        return this;
    }
    public withNavigateFirstPage(navigateFirstPage: number): ListSubTaskCaseOverstockUsingResponse {
        this['navigate_first_page'] = navigateFirstPage;
        return this;
    }
    public set navigateFirstPage(navigateFirstPage: number  | undefined) {
        this['navigate_first_page'] = navigateFirstPage;
    }
    public get navigateFirstPage(): number | undefined {
        return this['navigate_first_page'];
    }
    public withNavigateLastPage(navigateLastPage: number): ListSubTaskCaseOverstockUsingResponse {
        this['navigate_last_page'] = navigateLastPage;
        return this;
    }
    public set navigateLastPage(navigateLastPage: number  | undefined) {
        this['navigate_last_page'] = navigateLastPage;
    }
    public get navigateLastPage(): number | undefined {
        return this['navigate_last_page'];
    }
    public withNavigatePages(navigatePages: number): ListSubTaskCaseOverstockUsingResponse {
        this['navigate_pages'] = navigatePages;
        return this;
    }
    public set navigatePages(navigatePages: number  | undefined) {
        this['navigate_pages'] = navigatePages;
    }
    public get navigatePages(): number | undefined {
        return this['navigate_pages'];
    }
    public withNavigatepageNums(navigatepageNums: Array<number>): ListSubTaskCaseOverstockUsingResponse {
        this['navigatepage_nums'] = navigatepageNums;
        return this;
    }
    public set navigatepageNums(navigatepageNums: Array<number>  | undefined) {
        this['navigatepage_nums'] = navigatepageNums;
    }
    public get navigatepageNums(): Array<number> | undefined {
        return this['navigatepage_nums'];
    }
    public withNextPage(nextPage: number): ListSubTaskCaseOverstockUsingResponse {
        this['next_page'] = nextPage;
        return this;
    }
    public set nextPage(nextPage: number  | undefined) {
        this['next_page'] = nextPage;
    }
    public get nextPage(): number | undefined {
        return this['next_page'];
    }
    public withPageNum(pageNum: number): ListSubTaskCaseOverstockUsingResponse {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withPageSize(pageSize: number): ListSubTaskCaseOverstockUsingResponse {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPages(pages: number): ListSubTaskCaseOverstockUsingResponse {
        this['pages'] = pages;
        return this;
    }
    public withPrePage(prePage: number): ListSubTaskCaseOverstockUsingResponse {
        this['pre_page'] = prePage;
        return this;
    }
    public set prePage(prePage: number  | undefined) {
        this['pre_page'] = prePage;
    }
    public get prePage(): number | undefined {
        return this['pre_page'];
    }
    public withSize(size: number): ListSubTaskCaseOverstockUsingResponse {
        this['size'] = size;
        return this;
    }
    public withStartRow(startRow: number): ListSubTaskCaseOverstockUsingResponse {
        this['start_row'] = startRow;
        return this;
    }
    public set startRow(startRow: number  | undefined) {
        this['start_row'] = startRow;
    }
    public get startRow(): number | undefined {
        return this['start_row'];
    }
    public withTotal(total: number): ListSubTaskCaseOverstockUsingResponse {
        this['total'] = total;
        return this;
    }
}